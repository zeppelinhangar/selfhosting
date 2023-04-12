---
title: Bot Control
position: 5
---

`bot_control` is the Zeppelin plugin which lets you manage your instance (i.e. allowing other servers)

## Command Access

### `STAFF` commands

In order to use these commands, you will need to have your discord user ID defined in the `STAFF` environment variable.

### permission-requiring commands

**In order to use these commands, you will need to have the assigned permissions, regardless of being in the `STAFF` environment variable.**

This means that you will need to add/edit your **[`global` config key](./global-config.md)** directly on your `configs` table in your database (in JSON format)

Take a look at the [global config guide](./global-config.md) for more information on this.

> Alternatively, check the [Default BotControl Overrides Patch](../patch/default-bc-overrides.md) that adds these automatically for `STAFF` users

## Command List

### `STAFF` commands

#### Allow Server

> Usage: `@bot allow_server <guild_id> [user_id]`

> Aliases: `allowserver`, `add_server`, `addserver`

This commands adds a server to the allowlist, and if `user_id` is specified, gives permanent manage access permission to the ID specified.

Additionally, it also provides manage access permission for one hour to the person running this command.

#### Disallow Server

> Usage: `@bot disallow_server <guild_id>`

> Aliases: `disallowserver`, `remove_server`, `removeserver`

This commands removes a server from the allowlist.

#### Leave Server

> Usage: `@bot leave_server <guild_id>`

> Aliases: `leave_guild`

This command forces the bot to leave a specified server.

#### Servers

> Usage: `@bot servers`

> Aliases: `guilds`

> Flags: `-search <text>`, `-all`, `-initialized`, `-uninitialized`

This command displays a count of the servers that the bot is on, or if a flag is utilized, displays a list of matching servers

#### Channel To Server

> Usage: `@bot channel_to_server <channel_id>`

> Aliases: `channel2server`

This fetches information about a channel, such as it's type and what server it belongs to.

#### Add Dashboard User

> Usage: `@bot add_dashboard_user <guild_id> <users>`

This commands gives access for the specified user(s) (space-separated) for the specified guild ID.

#### Remove Dashboard User

> Usage: `@bot remove_dashboard_user <guild_id> <users>`

This commands revokes access for the specified user(s) (space-separated) for the specified guild ID.

#### Reload Server

> Usage: `@bot reload_server <guild_id>`

> Aliases: `reload_guild`

This command reloads the config and plugins of a specific guild ID.

#### Bot Reload Global Plugins

> Usage: `@bot bot_reload_global_plugins`

This command reloads your global config and global plugins.

### `can_eligible` commands

#### Eligible

> Usage: `@bot eligible <user> <invite>`

> Aliases: `is_eligible`, `iseligible`

This command checks if a user or invite code (guild information) pass the eligibility checks for the main instance.

Eligibility checks are defined [here](https://github.com/ZeppelinBot/Zeppelin/blob/master/backend/src/plugins/BotControl/functions/isEligible.ts)

#### Add Server From Invite

> Usage: `@bot add_server_from_invite <user> <invite>`

> Aliases: `allow_server_from_invite`, `adv`

This command checks if a user or invite code (guild information) pass the eligibility checks for the main instance, and if so, allows the server of their invite URL.

### `can_list_dashboard_perms` commands

#### List Dashboard Perms

> Usage: `@bot list_dashboard_permissions`

> Aliases: `list_dashboard_perms`, `list_dash_permissions`, `list_dash_perms`

> Flags: `-g <guild_id>`, `-u <user_id>`

This command lists all permission assignments for either the specified guild or user ID.

#### List Dashboard Users

> Usage: `@bot list_dashboard_users <guild_id>`

This command lists all users who have any permissions for a specific guild ID.

### `can_performance` commands

#### Ratelimit Performance

> Usage: `@bot rate_limit_performance`

This command generates a log file of ratelimits hit during the bot's uptime, in archive form.

#### Rest Performance

> Usage: `@bot rest_performance`

This command was intended to display the top count of REST calls performed during the bot's uptime but seems to no longer function.

#### Profiler Data

> Usage: `@bot profiler_data`

This command generates a log file of the profiler's data during the bot's uptime, in archive form.
