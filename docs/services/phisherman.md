---
title: Phisherman
description: Configuring Phisherman for phishing detection
hide_table_of_contents: false
sidebar_position: 5
---

# [Phisherman](https://phisherman.gg/) - Anti [Phishing](https://www.phishing.org/what-is-phishing)

## Prerequisites

- A Phisherman API Key

## Requesting a Key

As of writing this, you will need to:

1. Join their [Discord](https://discord.gg/CQsTfzU7mU).
2. Visit the [Api-Access](https://canary.discord.com/channels/878130674844979210/905832873720938506) channel.

:::danger
You **must** specify that your bot is a 'Self Hosted Zeppelin'.

Don't just say "It's for zeppelin" or "it's for a bot",
because the API keys needed for self-hosting have different permissions than the ones for other uses, and you will end
up with a non-functioning key and have to contact Modmail again.
:::
:::tip
If you are scared of saying the wrong thing, use this message:

Hey! Hope you're doing alright, may I please get a key for my self-hosted Zeppelin?
:::

## Locating a Key

- After you get your key, you can hop on their website: <https://phisherman.gg>.
- After logging in with Discord, click on your profile at the top right, then click 'Settings'.
  > ![Phisherman Key](/img/guides/phisherman/phisherman-settings.png "Locating your Key")
- You will find your key underneath your profile picture, copy it.

## Using a Key

You can now integrate it to Zeppelin in your `.env`:

> ```
> PHISHERMAN_API_KEY=<your key>
> ```

And then on the server configs:

> ```yaml
> plugins:
>   phisherman:
>     config:
>       api_key: "<your key>"
> ```

After which you can follow the plugin's guide in order to use for Automod: <https://zeppelin.gg/docs/plugins/phisherman>

---

:::info Note for Developers
The per-server API keys are only validated to make sure they are valid, they are not actually used for API requests to
Phisherman, only the master key is used for this.

When using the same master key and per-server config key, the key will not be validated through the API, this in theory
makes it possible to use a non-zeppelin API key to run the service, however other users of your instance would then no
longer be able to use Phisherman.
:::
