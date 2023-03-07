---
title: Introduction
description: Overview of the Community Patches
hide_table_of_contents: false
sidebar_position: 1
---

## What are the Community Patches?

The `Community Patches` are a collection of applicable "patches" for common-requested functionality within the Zeppelin self-hosting community.

## How to use?

Right now, patches are being added manually to the [patches repository,](https://github.com/zeppelinhangar/community-patch/tree/main/patches) and you can apply them to your own instance by downloading the patch and running `git am <path to file>`.

However, you can generate a patch file for any [PR](https://github.com/ZeppelinBot/Zeppelin/pulls) by appending `.patch` to the URL.

:::info
After applying a patch, you may need to perform any/all the following actions:

<details>
    <summary>For a locally hosted zeppelin</summary>
    <p>Rebuild your Bot Service</p>
    <p>Rebuild your API Service</p>
    <p>Run DB migrations (<code>npm run migrate-prod</code>)</p>
    <p>Redeploy your Bot Service</p>
    <p>Redeploy your API Service</p>
</details>
<details>
    <summary>For a zeppelin hosted on docker</summary>
    Restart the bot, by i.e running: <code>bash ./update.sh</code> (from the project root)
</details>

**If you are not sure what actions to perform for a specific patch, just perform them all to be safe, they will also be specified on each patch's guide page.**
:::

## Updating patches

Sometimes, patches will be updated, in case you had already previously applied the patch, you will get `git am` errors when running the command again.
These errors can be for one of two reasons:

> - You already applied that commit (in this case you can just run `git am --skip` to skip applying it again)
> - Another commit made changes to a previous commit and created merge issues (in this case you will have to resolve merge issues before continuing)

## Outdated patch disclaimer

Each patch will have on its guide page documented the GitHub commit it was tested for [the main repo](https://github.com/ZeppelinBot/Zeppelin), if it does not function for your current repo, please try cloning the specified commit and try again.

All patches are maintained by the community and as thus are not guaranteed to always be up-to-date or functioning.

:::note
If a patch does not work on latest of [the main repo](https://github.com/ZeppelinBot/Zeppelin), please let us know on our [discord server](https://discord.gg/uTcdUmF6Q7)
:::

## Patch list

### [Select Menu Roles](./select-menu.md)

Adds select-menu role pickers

### [Timeout Support](./timeouts.md)

Adds timeout support for mutes

### [Social Media Poster](./social-media.md)

Adds automatic feeds for social media

### [Reason Aliases](./reason-aliases.md)

Adds 'canned' reasoning for moderator actions

### [VC Activities](./activities.md)

Adds the ability for Discord's VC activities

### [Better Archives](./better-archives.md)

Adds better archiving capabilities to zeppelin

### [Better Dashboard Management](./better-dashboard-management.md)

Spoofs API permissions for Zeppelin STAFF users so that they have access to all servers without modifying your database

### [Hangar Emoji](./hangar-emoji.md)

Changes your case icon and success emoji icon to use emoji from [The Hangar](https://discord.gg/uTcdUmF6Q7) discord server

### [Default BotControl Overrides](./default-bc-overrides.md)

Adds overrides to the `bot_control` plugin so that all `STAFF` users have access to all Zeppelin global commands by default

### [Tags Counter Getters](./tags-counter-getters.md)

Adds template functions to the tags plugin to enable you to dynamically pull counter values
