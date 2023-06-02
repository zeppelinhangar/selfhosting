---
title: Railway Guide
description: Hosting on Railway.app
hide_table_of_contents: false
---

# Deploy [Zeppelin](https://zeppelin.gg) on [Railway](https://railway.app?referralCode=VTVa-k)

:::warning
Railway has a free tier of execution hours up to 500h with no credit/debit card, and a $5/month free tier with a credit card.

Depending on usage, it's likely that it will end up being free, however you will need to give them a credit/debit card for unbound usage.
:::

## Prerequisites

- [Railway Account](https://railway.app?referralCode=VTVa-k) - connected to GitHub
- [Discord Account](https://discord.com)
- [GitHub Account](https://github.com) - older than 30 days
- Debit/Credit card (If you want unlimited execution hours)

Click on the deploy link above. You should see something like this: ![Deploy page](/img/guides/railway/deploy_landing.png)
Then, click on "Deploy Now".

## Set up the Discord bot

Please refer to the [Discord Bot Setup page](../discord/bot-creation/creation.md).
But do not fill in the OAuth URL just yet.

## Deploying

### The actual bot

Click on "Configure". You should see something like this: ![Expanded box after clicking configure](/img/guides/railway/bot.png)

First, we have the Respository Details:

- Select the account/organization to clone the project.
- Give your bot repo a unique name. Eg: `zeppelin-bot`, `zepp-backend`.
- Whether or not the repo should be private, i.e, people that you do not add, have no access to the code.

**Environment Variables:**

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

**Environment Variables:**

- `CLIENT_ID`: This is the ID of the bot you created above in the Discord developer portal.
- `CLIENT_SECRET`: This is the secret from the Oauth page in the Discord developer portal.
- Click on the dropdown button
- Use the same values you used for `STAFF`, `DEFAULT_ALLOWED_SERVERS`, and `KEY`.

### The Dashboard

![Dasboard](/img/guides/railway/api.png)

**Environment Variables:**

- `GIT_REPO`: If you have cloned the Zeppelin repo have modified it and want to run with those changes

Click the "Deploy" Button, and you're almost done.

Before you're running off to the races, it is necessary to set the mysql database's authentication method properly.
This is currently an issue with Zeppelin's MySQL client's authentication, your API/Bot containers will fail the first time you run them because of this.
Follow these steps to fix the issue:

### The Database Fix

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

Now, redeploy the API and bot.
You can do this by heading to your API/Bot containers, clicking the 3-dots button on the failed deployment, and hitting "Redeploy".

### OAuth Redirect URL

We need to insert the OAuth Redirect/Callback URL on Discord's Developer Portal, you can do this in 1 of 2 ways:

1.) Go to your API container -> Settings -> Domains, copy the domain and manually append `auth/oauth-callback` to it.
(i.e. `https://your_api_url.up.railway.com/auth/oauth-callback`)

2.) Once the API is done building, click the deployment (View Logs), select "Builds Logs", select the Filter bar and search for "oauth".
![Api Logs](/img/guides/railway/api_logs.png)

Now, go back to Discord Developer Portal and use this url for the OAuth Callback.

And there you go, a fully functioning Zeppelin hosted on railway.

### Finishing

You should now be able to login to your Dashboard (URL found in your Dashboard container's Settings) and your bot should be online!
Use this link to invite your bot to your server if you haven't already (replace `YOUR_BOT_ID_HERE` with your bot's client ID)
`https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID_HERE&permissions=8&scope=bot%20applications.commands `
