---
title: Reason Aliases
description: A guide to 'canned' moderation reasons.
hide_table_of_contents: false
sidebar_position: 2
---

:::info
This patch was tested for [master@ba78103](https://github.com/ZeppelinBot/Zeppelin/commit/ba7810380730f5ec2917608567d61f0594101b97)
:::

## What is this?

The reason aliases patch adds 'canned' reasoning for moderator actions.

```yaml
plugins:
  config:
    mod_actions:
      reason_aliases:
        advertising: This is an alias for advertising
```

`!ban @user advertising`

## Downloading the Patch

Download the patch from [PR 390](https://patch-diff.githubusercontent.com/raw/ZeppelinBot/Zeppelin/pull/390.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service and API Service, as well as run DB migrations.
:::

## Respective Patches

`0004-reason-aliases.patch`- Initial setup
