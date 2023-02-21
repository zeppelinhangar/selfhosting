---
title: Ubuntu (Deprecated)
description: The Recommended Way
hide_table_of_contents: false
sidebar_position: 2
---

:::warning
This method of self-hosting is now deprecated, see the guide for docker [here](./linux-docker.md)
:::

# Ubuntu Setup

:::info
This guide was written and tested for **Ubuntu 18.04.6 LTS**
:::

## Intro

In case you haven't done so already, take a look at the [Introduction](../intro.md) :triumph:

## Useful resources

Throughout the installation, you might run into things you are not familiar with, here is a list of some resources you
can use to find out more about the things you're doing.

- [Google](https://google.com/)
- [MariaDB Docs](https://mariadb.com/kb/en/documentation/)
- [Nginx Docs](https://nginx.org/en/docs/)
- [Git Docs](https://git-scm.com/doc)
- [pm2 Docs](https://pm2.keymetrics.io/docs/usage/quick-start/)

There is also the Zeppelin support server and Zeppelin self-hosting server.

- [Zeppelin support server](https://discord.gg/zeppelin)
- [Zeppelin self-hosting server](https://discord.gg/uTcdUmF6Q7)

**IMPORTANT NOTICE FOR VPS USERS:** It is recommended that when setting up the bot, you allocate at LEAST 2 GB of ram to
your system. This is because building the bot uses significantly more system resources than actually running it. Once
the bot has been initially sewell t up, you can reduce the amount of ram back to 1GB if you like.

## Adding a new user to Linux (Skip if already not using root user)

You should run Zeppelin with a user that is not root, to add a new user run:

1. `sudo adduser <username>` This will add a new user with your chosen username.
2. When asked for a password enter one you will remember as you'll need it later.
3. When prompted to enter values for Full Name, Room Number etc., just press enter to choose blank values.
4. Run `sudo usermod -aG sudo <username>` to add the new user to the sudoers.
5. Run `su <username>` to switch to that user, you'll need to enter the password you picked earlier.
6. Change into the users home directory with `cd ~`

## Check for updates

`sudo apt update && sudo apt upgrade -y`

## Install the necessary software

1. `sudo apt -y install mariadb-server git nano curl build-essential nginx`
   - mariadb for the database, other SQL like databases such as mySQL will not work.
   - Git allows us to clone the bot and stay up to date with the main instance.
   - Nano is a text editor that will allow us to edit files.
   - Curl is required for certain installation scripts, this should already be installed.
   - build-essential is required for building the bot.
   - Nginx for the webserver will allow us to serve web files for the dashboard, which is where the config is
     edited/built, if you are familiar with another web server then feel free to use that instead.

It will probably say that some things are already installed, which is fine. Just make sure there are no errors.

2. Install NVM (Node Version Manager). Instead of installing Node directly (and running the risk of installing the wrong
   version), NVM is used because the code contains a setting that tells NVM which node version to use. This reduces any
   chance of complications down the road.
3. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
4. Log out and log back in. If you're connected by SSH, run `exit` and reconnect.

## Clone zeppelin

`git clone https://github.com/ZeppelinBot/Zeppelin`

This creates a folder called Zeppelin and clones the bot there.

## Install NodeJS

Now we need to get NVM to read the Node version and install the correct Node version.

1. `cd Zeppelin`
2. `nvm install`

## Set up GitHub SSH Access

Building the bot will include having to access various GitHub repositories and download code from different places; code
that the bot depends on. In order to do that, we need to set up a GitHub account - if you don't have one yet, just visit
[GitHub](https://github.com/signup) and go from there - and set up SSH access via a key pair so your server can access
these GitHub repositories as needed during the installation process.

1. `ssh-keygen -t ed25519 -C "your_email@example.com"` (substituting your email address in the quotes; keep the quotes).
2. `eval "$(ssh-agent)"`
3. `ssh-add ~/.ssh/id_ed25519`
4. `cat ~/.ssh/id_ed25519.pub` Copy all the text from the output.
5. Install the key pair to GitHub:
6. Log in to GitHub (see the above step if you need to create an account).
7. Click on your profile picture on the top right and click on Settings.
8. On the left, click on SSH and GPG Keys, then click New SSH Key.
9. Paste the text (from step 4) into the key box and name it. Then click the green save button.
10. Back in the SSH shell, `ssh -T git@github.com`

## Configuring the database, bot, and API

### Initial Installation

1. `cd backend`
2. `npm ci`
   - Make sure there are no errors. If there are errors, try a Google search for your error, if that doesn't work then
     ask for help in the self-hosting server.
3. `cd ..`
4. `cp .env.example .env`
5. `echo KEY=$(openssl rand -hex 16) > .env`
6. `cd backend`
7. `cp bot.env.example bot.env`
8. `cp api.env.example api.env`

We'll fill in the rest of the env files later. First, we need to set up the database.

### Initial Database Setup

1. First run `sudo mysql_secure_installation`, this will be used to secure the database, follow the
   prompts.
2. Bring yourself into the mariadb console by running `sudo mariadb`
3. Create a new user to use with Zeppelin `GRANT ALL ON zep.* to 'zep'@'localhost' identified by 'PASSWORD_HERE' WITH GRANT OPTION; `
4. Refresh permissions with `FLUSH PRIVILEGES;`
5. Create a database that will store the zeppelin data `CREATE DATABASE zep;`
6. Exit mariaDB with `exit`
7. Use `sudo nano /etc/mysql/mariadb.conf` to edit the mariadb config file and add:

```
[mariadb]
default_time_zone = '+0:00'
```

to the bottom of the file.

8. Save the file, then restart mariadb with `sudo systemctl restart mariadb`

### Setting up the Bot

Please refer to the [Discord Bot Setup page](../discord/bot-creation/creation.md).

### Fill in the Bot/API Env settings

1. `cp .env.example .env`
2. Run the following commands in the terminal and copy the output to a text file. Once you start step 4 you won't be able to refer back to the terminal to get the output.
   - `openssl rand -hex 16`
     Copy the output (Select and Ctrl-Shift-C). You'll need it in the next step.
3. `nano .env`
   This opens nano, a text editor, editing .env. The subpoints lay out the values you need to fill in. Ignore the rows that are not mentioned below.
   - `KEY`: This is an encryption key used to encrypt certain data in the database.
     - Paste in the key you obtained from the openssl command in Step 3 above.
     - It should be 32 characters long, letters and numbers only.
   - `CLIENT_ID`: This is the ID of the bot you created above in the Discord developer portal.
   - `CLIENT_SECRET`: This is the secret from the Oauth page in the Discord developer portal
   - `BOT_TOKEN`: This is the bot token from the Bot page in the Discord developer portal.
   - `DASHBOARD_URL`: This is the URL you and other bot managers will use to access the dashboard to manage server configs
     - If you are using a domain, fill in https://DOMAIN (e.g. https://zeppelin.gg)
     - if you are using an IP address, fill in https://IP
   - `API_URL`: This is used by the dashboard to access the bot internals; also used by Discord to redirect you back to the dashboard after you log in.
     - Use your dashboard URL, but add `/api` at the end (e.g. https://zeppelin.gg/api)
   - `STAFF`: These are staff to help manage the bot itself. These are not server staff that would manage bot configs.
     - In a self-hosted situation, it would most likely just be you.
     - Get your Discord ID (an 18-20-digit number) and fill it in.
     - If there will be multiple people managing the bot, separate the user IDs with commas.
   - `DEFAULT_ALLOWED_SERVERS`: Normally servers need to be allowed before the bot can be added to it. Otherwise it leaves. This indicates the first server that the bot could be added to, where administrative commands can be run to allow other servers.
     - Fill in the Discord server's ID.
   - `PHISHERMAN_API_KEY`: Phisherman is a live database used for identifying malicious, scam, and phishing links. Uncomment the row if you have an api key.
4. When you are done editing, press Ctrl-X, then Y, then Enter to save and exit Nano.

### Build the Bot and API

1. `npm run build`
   - Make sure there are no errors. If there are errors, try a Google search for your error, if that doesn't work then
     ask for help in the self-hosting server.
2. Run migrations. This will set up the database structure and all the necessary tables. `npm run migrate-prod`

### Start Bot and API

#### In Production

For production use (most cases), use pm2 to manage your bot instances. Zeppelin already comes with "process files" for
pm2, which are files that contain instructions telling pm2 how to start the bot and API.

1. `npm i -g pm2`
2. `cd ..`
3. `pm2 start process-bot.json`
4. `pm2 start process-api.json`

#### In Development

To start the bot in development, run `npm run watch`. This will build and start both the bot and API, it will also check
for file changes and update the bot automatically.

## Install and Build the Dashboard

1. cd to the dashboard folder:
   - If you are in the backend folder: `cd ../dashboard`
   - If you are in the Zeppelin folder: `cd dashboard`
2. `npm ci`
3. `cp .env.example .env`
4. `nano .env`
   - API_URL=http://YOUR_IP:8800
     - As before, make sure there is no slash trailing slash.
5. If you are setting up a production bot: `npm run build`
6. If you are setting up a development bot: `npm run watch`
   - This will build and set up a temporary web server that hosts the dashboard, but it will only be accessible locally.

## Set up Nginx for Production Bots (Can use another webserver if comfortable)

1. `sudo nano /etc/nginx/conf.d/zeppelin.conf`
2. Copy the following:

```
server {
    listen 1234; # replace with dashboard port
    listen [::]:1234; # replace with dashboard port

    server_name zeppelin; #or domain on a live server

    root /home/zeppelin/Zeppelin/dashboard/dist; #replace ubuntu with  account name
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. Save the file. **The file must end in .conf for it to work correctly**.
4. `sudo systemctl restart nginx`
   - Make sure there are no errors. If there are, run `systemctl journal nginx.service` (or whatever command it tells
     you to run, it'll list a command to run if it fails to restart) to view the error log, try a Google search for your
     error, if that doesn't work then ask for help in the self-hosting server.

That's it! The bot should be fully functional. The dashboard should be accessible at http://[localhost|domain|ip]:1234.
If there are any issues, or to see sample configs, please visit the Zeppelin support Server or self-hosting server.
