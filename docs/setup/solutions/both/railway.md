---
title: Railway Guide
description: Hosting on Railway.app
hide_table_of_contents: false
---

# Deploy [Zeppelin](https://zeppelin.gg) on [Railway](https://railway.app?referralCode=VTVa-k)

## Prerequisites

- [Railway Account](https://railway.app?referralCode=VTVa-k) - connected to GitHub
- [Discord Account](https://discord.com)
- [GitHub Account](https://github.com) - older than 30 days

Click on the deploy link above. You should see something like this: ![Deploy page](/img/guides/railway/deploy_landing.png)
Then, click on "Deploy Now".

## Set up the Discord bot

Please refer to the [Discord Bot Setup page](../../discord/bot-creation/creation.md).
But do not fill in the OAuth URL just yet.

## Deploying
### The actual bot
Click on "Configure". You should see something like this: ![Expanded box after clicking configure](/img/guides/railway/bot.png)

First, we have the Respository Details:
  - Select the account/organization to clone the project.
  - Give your bot repo a unique name. Eg: `zeppelin-bot`, `zepp-backend`.
  - Whether or not the repo should be private, i.e, people that you do not add, have no access to the code.

Next, We have the environment variables:
  - `KEY`: A 32 Character encryption key.
    - If you're on a linux machine, run `openssl rand -hex 16`, you should get an output like: `2df1a26aca2ca386924a4ef00b22f300`
    - Else, just generate a string, 32 characters long, letters and numbers only.
  - `BOT_TOKEN`: Your bot's token that allows it to access Discord.
    - Found on the `Bot` page of the Discord Dev Portal.
  - `DEFAULT_ALLOWED_SERVERS`: Normally servers need to be allowed before the bot can be added to it. Otherwise it leaves. This indicates the first server that the bot could be added to, where administrative commands can be run to allow other servers.
    - Fill in your Discord server's ID.
  - Click on the dropdown button
  - `STAFF`: These are staff to help manage the bot itself. These are not server staff that would manage bot configs.
    - In a self-hosted situation, it would most likely just be you.
    - Get your Discord ID (an 18-20-digit number) and fill it in.
    - If there will be multiple people managing the bot, separate the user IDs with commas.
  - `GIT_REPO`: If you have cloned the Zeppelin repo have modified it and want to run with those changes

And we're done! Just click "Save Config".

### The API Service
![API Service](/img/guides/railway/api.png)

Environment Variables:
  - `CLIENT_ID`: This is the ID of the bot you created above in the Discord developer portal.
  - `CLIENT_SECRET`: This is the secret from the Oauth page in the Discord developer portal.
  - Click on the dropdown button
  - Use the same values you used for `STAFF`, `DEFAULT_ALLOWED_SERVERS`, and `KEY`.

### The Dashboard
![Dasboard](/img/guides/railway/api.png)

Environment Variables:
  - `GIT_REPO`: If you have cloned the Zeppelin repo have modified it and want to run with those changes

Click the "Deploy" Button, and you're almost done.

Before you're running off to the races, it is necessary to set the mysql database's password properly.

### The Database
Once you've deployed, click on the database container and go to the connect tab.
Copy the variable for the `MYSQLPASSWORD` variable
![Connect Tab](/img/guides/railway/db_connect.png)

Next, head to the Query Tab and enter the following:
```sql
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'VALUE_OF_MYSQL_PASSWORD';
```

Click "Run Query" and then
```sql
flush privileges;
```
and run the query again.
![Query Tab](/img/guides/railway/db_query.png)


### Finishing
Now, redeploy the API and bot.
Once the API is done building, use the Filter bar and search for "oauth".
![Api Logs](/img/guides/railway/api_logs.png)

Now, go back to Discord Developer Portal and use this url for the OAuth Callback.

And there you go, a fully functioning Zeppelin hosted on railway.
