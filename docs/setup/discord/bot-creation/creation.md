---
title: Discord Dev Portal Guide
description: How to set up an application
hide_table_of_contents: false
---

## Setting up the Bot

1. In your browser, go to https://discord.com/developers/applications/ and log in.
2. Click on the button **Create new application** and name it.
3. On the left, click on **Oauth2**
   - Under **Redirects**, put `http://IP_OR_DOMAIN/api/auth/oauth-callback` into the text box.
     - Substitute the VPS IP, or domain if you will use one, into IP_OR_DOMAIN. This is the same IP or domain you will use to access the bot's dashboard.
     - If there is no text box, click **Add Another**
     - Make sure there is no trailing slash (e.g. /oauth-callback not /oauth-callback/)
       ![oauth redirects](/img/guides/discord/oauth_redirects.png "OAuth Redirects")
   - On the bottom, click the green **Save** button.
4. On the left, click on **Bot** and add a bot.
   - Under **Privileged Gateway Intents**, enable all 3 toggles.
     ![Gateway Intents](/img/guides/discord/gateway_intents.png "Gateway Intents")
5. Invite the bot to the server but do not try to run any commands.
   - https://discord.com/api/oauth2/authorize?client_id=CLIENT-ID-HERE&permissions=8&scope=bot
   - Replace `CLIENT-ID-HERE` with your bots' client ID.
