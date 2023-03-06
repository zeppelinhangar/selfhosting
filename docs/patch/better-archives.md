---
title: Better Archives
description: A guide to the Better Archives
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@801cd26](https://github.com/ZeppelinBot/Zeppelin/commit/801cd2630b5d75dd3c2d132d13a87cd05da0931a)
:::

## What is this?

The better archives patch adds:

> Auto-archiving of user's messages on any case creation
>
> `!archive <user>` command (utility)
>
> Higher clean command limits and message retentions
>
> Database performance improvements to queries for the `messages` table
>
> Better-looking archive view webpage (and archives are now based on the dashboard)

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0006-better-archives.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service, as well as run DB migrations.

> You will also need to add the `dashboard_url` key to the top-level of your instance's **[`global` config key](../setup/global-config.md)** (with your dashboard's URL)
> :::

## Respective Patches

`0006-better-archives.patch`- Initial setup
