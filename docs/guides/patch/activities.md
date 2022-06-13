---
title: VC Activities
description: A guide to accessing Discord's VC Activities
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@ba78103](https://github.com/ZeppelinBot/Zeppelin/commit/ba7810380730f5ec2917608567d61f0594101b97)
:::

## What is this?

The VC activities patch adds the ability to use Discord's new VC activity "games".

`!activity`
![Activities](/img/guides/community-patch/activities.png "VC Activites")

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0005-created-activities-plugin.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service and API Service, as well as run DB migrations.
:::

## Respective Patches

`0005-created-activities-plugin.patch`- Initial setup
