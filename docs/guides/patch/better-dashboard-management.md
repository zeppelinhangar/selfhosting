---
title: Better Dashboard Management
description: A guide to the Better Dashboard Management
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@801cd26](https://github.com/ZeppelinBot/Zeppelin/commit/801cd2630b5d75dd3c2d132d13a87cd05da0931a)
:::

## What is this?

The better dashboard management simply spoofs permissions returned from your API service for all staff users so that they have access to everything on the dashboard.

Keep in mind this doesn't actually modify your DB to include staff users - this simply spoofs them from the API directly.

This means that you can perform all actions on the dashboard as a staff user even if not defined as having permission nodes on your database.

:::warning
This patch **WILL** cause API performance losses (at least on user logins) due to how it operates.

These performance losses should be negligible at low scale.
:::

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0007-better-dashboard-management.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your API Service.
:::

## Respective Patches

`0007-better-dashboard-management.patch`- Initial setup
