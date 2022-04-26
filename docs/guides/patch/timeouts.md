---
title: Timeout Support
description: A guide to the Timeout Support
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@8445c37](https://github.com/ZeppelinBot/Zeppelin/commit/8445c37f6410683b7b1b53811cf49eee61b9068a)
:::

## What is this?

The timeout support patch makes it so mutes will use timeouts if no `mute_role` is defined on your config.

:::warning
This patch is **NOT a complete implementation** of the timeouts support.

**Mutes will be limited to a maximum of 27 days with this patch, as you can't timeout a member for longer than that**
:::

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0002-timeouts-support.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service
:::

## Respective Patches

`0002-timeouts-support.patch`- Initial setup
