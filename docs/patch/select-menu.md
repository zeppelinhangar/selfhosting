---
title: Select Menu Roles
description: A guide to the Select Menu Roles
hide_table_of_contents: false
sidebar_position: 2
---

:::warning
This patch is deprecated
:::

:::info
This patch was tested for [master@280543d](https://github.com/ZeppelinBot/Zeppelin/commit/280543df4e45bfebb27c1c8142c787ecbfb6fc2a)
:::

## What is this?

The select menu roles patch adds customizable select menu roles pickers

![Select Menu Roles](/img/guides/community-patch/select_menu_roles.png "Select Menu")

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0001-creating-select-menu-role.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service and API Service, as well as run DB migrations.
:::

## Respective Patches

`0001-creating-select-menu-role.patch`- Initial setup
