---
title: Tags Counter Getters
description: A guide to the Tags Counter Getters patch
hide_table_of_contents: false
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger
Due to how this patch is implemented, it is highly possible that a SQL injection exploit exists.

**If you intend to use this, do NOT allow tag creation or config access on your instance to someone you don't trust!**
:::

:::info
This patch was tested for [master@801cd26](https://github.com/ZeppelinBot/Zeppelin/commit/801cd2630b5d75dd3c2d132d13a87cd05da0931a)

**This patch does not work on a vanilla Zepppelin Instance hosted on Docker due to it using `mysql`.
This patch requires `mariadb`.** To use this patch on docker, replace [line 15 and 16](https://github.com/ZeppelinBot/Zeppelin/blob/master/docker-compose.production.yml#L15-L16) with `mariadb`, and `mariadb:10` respectively.
:::

## What is this?

This patch adds several new template functions for the tags plugin, some of which enable you to get values of counters.

## Added tag template functions

### `get_counter_value(counterName, userId?, channelId?)`

Returns the counter value for `counterName`, optionally with `userId` or `channelId` if it is a counter with those options enabled.

### `get_all_counter_values(counterName, field?, limit?, userId?)`

Returns an array of objects of the queried data, `counterName` for the counter's name, `field` for the DB field name to sort by (always descending order), usually just `"value"` to sort by value for this counter.
`limit` will limit the amount of returned objects, and `userId` if it is a counter with that option enabled.

### `get_user(userId)`

Returns a resolvedUser object from a userID, useful for parsing tags from IDs

### `lb_map(array, sepperator, ...keys)`

TODO: Explain this better

### `find_i(array, key)`

Returns the index # of a key in the specified array

### `get_snowflake(string)`

Parses a string into snowflake (strips any non-numerical characters)

### `cases(modifier, array)`

This function already existed on the main instance, however, was modified to also handle array of arrays.

## Sample Tags for Leveling

<Tabs>
  <TabItem value="leaderboard" label="Leaderboard">

```yaml
"leaderboard":
  embed:
    title: |-
      LEADERBOARD
    color: 0xfdf2b7
    description: |
      {set("counter", "xp")}{set("rankno", if(not(eq(args.0, "")), args.0, 1))}{set("max", if(not(eq(args.1, "")),args.1,add(9, get("rankno"))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
      {if(or(gt(get("rankno"), get("max")), gt(get("rankno"), arrlen(get_all_counter_values(get("counter"), "value"))), lte(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), 0)), "", concat("**", get("rankno"), "** :: ", map(get_user(map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "user_id")), "mention"), " > ", map(cases(get("rankno"), get_all_counter_values(get("counter"), "value")), "value"), " XP", set("rankno", add(1, get("rankno")))))}
```

  </TabItem>
  <TabItem value="rank" label="Rank" default>

```yaml
"rank":
  embed:
    color: 0xfdf2b7
    author:
      name: |-
        {set("target", if(not(eq(args.0, "")), if(not(eq(get_user(args.0), "")), get_user(args.0), ""), user))}{set("is_valid", if(and(eq(args.0, ""), eq(map(get("target"), "id"), user.id)), "y", if(eq(get("target"), ""), "", "y2")))}
        {if(eq(get("is_valid"), ""), "<none>", concat(map(get("target"), "tag")))}
    thumbnail:
      url: |-
        {set("target", if(not(eq(args.0, "")), if(not(eq(get_user(args.0), "")), get_user(args.0), ""), user))}{set("is_valid", if(and(eq(args.0, ""), eq(map(get("target"), "id"), user.id)), "y", if(eq(get("target"), ""), "", "y2")))}
        {if(eq(get("is_valid"), ""), "", map(get("target"), "avatarURL"))}
    description: |
      {set("counter", "xp")}{set("show_rank", "true")}{set("xp_exponent", 1.3)}{set("xp_multiplier", 60)}{set("xp_offset", 7)}{set("target", if(not(eq(args.0, "")), if(not(eq(get_user(args.0), "")), get_user(args.0), ""), user))}{set("realxp", get_counter_value(get("counter"), map(get("target"), "id")))}{set("xp", if(or(eq(get("realxp"), ""), eq(get("realxp"), 0)), 0, get("realxp")))}{set("level", floor(exp(div(sub(get("xp"), get("xp_offset")), get("xp_multiplier")), div(1,get("xp_exponent")))))}{set("curr_max", ceil(add(mul(get("xp_multiplier"), exp(get("level"), get("xp_exponent"))), get("xp_offset"))))}{set("next_max", ceil(add(mul(get("xp_multiplier"), exp(add(1, get("level")), get("xp_exponent"))), get("xp_offset"))))}{set("progress", sub(get("next_max"), sub(get("next_max"), get("xp"))))}{set("is_valid", if(and(eq(args.0, ""), eq(map(get("target"), "id"), user.id)), "y", if(eq(get("target"), ""), "", "y2")))}{set("progress_base",if(eq(get("level"), 0), get("xp"), sub(get("xp"), get("curr_max"))))}{set("progress_next",if(eq(get("level"), 0), get("next_max"), sub(get("next_max"), get("curr_max"))))}{set("rank", if(and(eq(get("is_valid"), ""), eq(get("show_rank"), "true")), "", map(get_all_counter_values(get("counter"), "value", 1, map(get("target"), "id")), "rank")))}
      {if(eq(get("is_valid"), ""), "Please check if you mentioned a user or put a correct user ID")}
      {if(and(eq(get("show_rank"), "true"), eq(get("is_valid"), "")), "", concat("**Rank:** #", get("rank")))}
      {if(eq(get("is_valid"), ""), "", concat("**Level:** ", get("level")))}
      {if(eq(get("is_valid"), ""), "", concat("**Progress:** ", get("progress_base"), " / ", get("progress_next")))}
      {if(eq(get("is_valid"), ""), "", concat("**Total XP:** ", get("xp")))}
```

  </TabItem>
</Tabs>

## Downloading the Patch

Download the patch from [here](https://github.com/zeppelinhangar/community-patch/blob/main/patches/0010-counters-tag-getters.patch).

## Applying the Patch

`git am <path to file>`

:::info
In order to apply the patch you will need to rebuild and redeploy your Bot Service
:::

## Respective Patches

`0010-counters-tag-getters.patch`- Initial setup
