---
title: Docker - Linux
description: Docker running on linux
hide_table_of_contents: false
sidebar_position: 1
---

In case you haven't done so already, take a look at the [Introduction](../intro.md) :triumph:

This guide assumes the host is a new VPS without anything else running. If you run this on an existing host or on a local machine, you may run into issues not covered by this guide.

# Useful resources

Throughout the installation, you might run into things you are not familiar with, here is a list of some resources you can use to find out more about the things you're doing

- [Google](https://google.com) (^:
- [MariaDB Docs](https://mariadb.com/kb/en/documentation/)
- [Nginx Docs](https://nginx.org/en/docs/)
- [Git Docs](https://git-scm.com/doc)

There is also the Zeppelin support server and Zeppelin self-hosting server

- [Zeppelin support server](https://discord.gg/zeppelin)
- [Zeppelin self-hosting server](https://discord.gg/uTcdUmF6Q7)

**IMPORTANT NOTICE FOR VPS USERS:** It is recommended that when setting up the bot, you allocate at **LEAST** 2 GB of ram to your system. This is because building the bot uses significantly more system resources than actually running it. Once the bot has been initially set up, you can reduce the amount of ram back to 1 GB if you like.

## Adding a new user to Linux (Skip if already not using root user)

You should run Zeppelin with a user that is not root, to add a new user run

### How do I know if I'm using the root user or not?

Open a terminal (or SSH into the VPS) and check the prompt. The user you are currently using is printed in the first half, before the "@".

If you are using the root user, follow the numbered instructions below. If not, skip down to "Check for and install updates."

1. `sudo adduser zeppelin`
   This will add a new user with your chosen username.
2. When asked for a password, enter one you will remember, as you'll need it later.
3. When prompted to enter values for Full Name, Room Number etc. Just press enter to select blank values.
4. Run `sudo usermod -aG sudo zeppelin` to add the new user to the sudoers
5. Run `su zeppelin` to switch to that user, you'll need to enter the password you picked earlier
6. Change into the user home directory with `cd ~`

## Install the necessary software

### Check for and install updates

`sudo apt update && sudo apt upgrade -y`

### Check if you already have docker installed

First, check if you already have docker installed.

Run the following commands and pay attention to the output.

1. `docker --version`

If it says that docker is not found, skip down to the Installing Docker section below.

If Docker is installed, it will give a version number. Make sure it's version 20. As of the time this article was written, the latest version was 20.10.22.

2. `docker compose version`

Make sure this is version 2 or higher (it should be if the command works as written)

If it is, skip down to the WHAT SECTION section.

3. `docker-compose version`

This is an older version of docker compose that might not work with Zeppelin without modification. It is not recommended to use this older compose version.

If `docker ps` does not yield any running containers, then continue on with the instructions below. Otherwise, you'll need to evaluate if upgrading the compose version will break any of your other projects/containers.

### Remove old docker installations

[Docker Docs Reference](https://docs.docker.com/engine/install/ubuntu/)

Follow these instructions even if you do not have Docker installed, just to be sure that all traces of Docker are removed from your system to avoid interference later on.

`sudo apt-get remove docker docker-engine docker.io containerd runc`

It's ok if it reports that none of these packages are installed.

### Install Docker

1. `sudo apt-get install ca-certificates curl gnupg lsb-release`

This installs packages needed for the actual installation step.

In order to install Docker, we need to add the package repository.

2. Add Docker's official GPG key:
   `sudo mkdir -p /etc/apt/keyrings`
   `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`

3. Set up the repository:
   `echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`

4. Update the apt index
   `sudo apt-get update`

5. Install Docker, Compose, and dependencies
   `sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin`

### Running Docker without sudo

[Docker Docs Reference](https://docs.docker.com/engine/install/linux-postinstall)

In order to run Docker without sudo, we need to make sure the docker group is created and that the user is added to that group.

1. `sudo groupadd docker`
2. `sudo usermod -aG docker $USER`
3. Log out and back in to see the changes. If you are running a virtual machine, you may need to restart the virtual machine.
4. Make sure you can run docker without sudo: `docker ps`

## Set up the Discord bot

Please refer to the [Discord Bot Setup page](../discord/bot-creation/creation.md).

## Install and set up Zeppelin

### Download the code

`git clone https://github.com/ZeppelinBot/Zeppelin`

This creates a folder called Zeppelin and clones the bot code there.

### Configure Zeppelin

1. Enter the Zeppelin folder: `cd Zeppelin`
2. `cp .env.example .env`
3. Run the following commands in the terminal and copy the output to a text file. Once you start step 4 you won't be able to refer back to the terminal to get the output.
   - `openssl rand -hex 16`
     Copy the output (Select and Ctrl-Shift-C). You'll need it in the next step.
   - `id -u`
     This is your user's ID. You'll need it in the next step
   - `id -g`
     This is your group's ID. You'll need it in the next step
4. `nano .env`
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
   - `DOCKER_USER_UID`: Paste in the output of `id -u` from Step 3 above
   - `DOCKER_USER_GID`: Paste in the output of `id -g` from Step 3 above
   - `DOCKER_PROD_DOMAIN`: If you are using a domain to access the dashboard, put the domain here
     - Put only the domain (e.g. zeppelin.gg) and not the URL.
   - `DOCKER_PROD_WEB_PORT`: The port used to access the dashboard.
     - If you have a webserver or another service that uses port 443 running on the host computer, change the port to something else, e.g. 444
   - `DOCKER_PROD_MYSQL_PORT`: This will allow you to access the dashboard from the host computer or another computer using a program such as DBeaver.
     - It does not need to be changed unless there is a port conflict with the host computer.
   - `DOCKER_PROD_MYSQL_PASSWORD`: Database access password for the zeppelin user.
     - Do not use `$'"(){}#` in the password
   - `DOCKER_PROD_MYSQL_ROOT_PASSWORD`: Database access password for the root user
     - Do not use `$'"(){}#` in the password
5. When you are done editing, press Ctrl-X, then Y, then Enter to save and exit Nano.

## Start the bot

`docker compose -f docker-compose.production.yml up -d`

The bot will pull images and build other images, create the containers, and start them. It will probably take about a minute or two to start.

That's it! The bot should be fully functional. The dashboard should be accessible at http://IP_OR_DOMAIN. If there are any issues, or to see sample configs, please visit the Zeppelin support Server or self-hosting server.
