---
title: Social Media Poster
description: A guide to the Social Media Poster plugin
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@ba78103](https://github.com/ZeppelinBot/Zeppelin/commit/ba7810380730f5ec2917608567d61f0594101b97)
:::

## What is this?

The Social Media Poster patch automatically sends new Reddit posts to supplied channels, with a customizable message.

![Social Media Plugin Poster](/img/guides/community-patch/social_media_plugin_poster.png "Social Media Plugin Poster")

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0003-Created-Social-Media-Poster-Plugin.patch)

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service and API Service, as well as run DB migrations.
:::

## Respective Patches

`0003-Created-Social-Media-Poster-Plugin.patch`- Social Media Plugin Poster
