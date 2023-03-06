---
title: Default BotControl Overrides
description: A guide to the Default BotControl Overrides
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@801cd26](https://github.com/ZeppelinBot/Zeppelin/commit/801cd2630b5d75dd3c2d132d13a87cd05da0931a)
:::

## What is this?

This patch applies default overrides to the `bot_control` plugin, so that all users defined on the `STAFF` environment variable automatically have access to all Zeppelin global commands by default without having to modify the **[`global` config key](../setup/global-config.md)**.

:::note
**Adding overrides to your `bot_control` plugin manually via the **[`global` config key](../setup/global-config.md)** could accidentally remove these overrides**.

Take note of that when applying this to pre-configured instances.
:::

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0009-default-bc-overrides.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service.
:::

## Respective Patches

`0009-default-bc-overrides.patch`- Initial setup
