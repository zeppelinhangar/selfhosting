---
title: Introduction
description: Overview of the Community Patch
hide_table_of_contents: false
sidebar_position: 1
---

## What is the Community Patch?

The `Community Patch` is a collection of self-hosting "patches" for common-used functionality within the Zeppelin self-hosting community.

## How to use?

Right now, patches are being added manually to the [patches repository](https://github.com/zeppelinhangar/community-patch/patches) and you can apply them to your own instance by downloading the patch and running `git am <path to file>`.

:::info
After applying a patch, you may need to perform any/all of the following actions:

> - Rebuild your [Bot Service](../../services/bot.md)
> - Rebuild your [API Service](../../services/api.md)
> - Run DB migrations (`npm run migrate-prod`)
> - Redeploy your [Bot Service](../../services/bot.md)
> - Redeploy your [API Service](../../services/api.md)

**If you are not sure what actions to perform for a specific patch, just perform them all to be safe, they will also be specified on each patch's guide page.**
:::

## Outdated patch disclaimer

Each patch will have on it's guide page documented the github commit it was tested for [the main repo](https://github.com/ZeppelinBot/Zeppelin), if it does not function for your current repo, please try cloning the specified commit and try again.

All patches are maintained by the community and as thus are not guaranteed to always be up-to-date or functioning.

:::note
If a patch does not work on latest of [the main repo](https://github.com/ZeppelinBot/Zeppelin), please let us know on our [discord server](https://discord.gguTcdUmF6Q7)
:::

## Patch list

### [Select Menu Roles](./select-menu.md)

Adds select-menu role pickers