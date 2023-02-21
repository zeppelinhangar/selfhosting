---
title: Global Configuration
position: 5
---

# Global Config

The `global` config is the configuration which lets you define some global variables and permissions for your instance.
It is important that you define it.

## Setting up your global config

:::info
It is highly recommended to use a tool like [DBeaver](https://dbeaver.io/download/) to perform these operations
:::

You will effectively need to insert/update a row to your `configs` table directly on your database with `id`=**1**, `key`=**global** and `is_active`=**1**.

### Config Values

The actual `config` value is just a JSON field of your actual configuration.

This configuration works similarly to dashboard guild configurations, except that you can configure global plugins on it, such as [`bot_control`](./bot-control.md).

For ease of use, use a tool like [https://onlineyamltools.com/convert-yaml-to-json](https://onlineyamltools.com/convert-yaml-to-json) to convert your YAML code directly into JSON for inputting into the table row.

```yaml
#
# This is YAML, in order to input this on your database
#  you will need to transform this into JSON after changing the values!
#

prefix:
  ! # This is your prefix for global commands, if this is not defined, the default prefix is @bot-mention


url: https://IP_OR_DOMAIN/api # This will allow your archives to link to a URL
plugins:
  bot_control:
    config:
      can_use: false # Currently doesn't do anything
      can_eligible: false # Allows the user to run server eligibility commands
      can_performance: false # Allows the user to run performance commands
      can_add_server_from_invite: false # Allows the user to add servers based on eligibility checks of a invite URL
      can_list_dashboard_perms: false # Allows the user to list dashboard permissions for a guild
      update_cmd: null # Currently doesn't do anything
    overrides:
      - any:
          - user: "USER_ID_1" # Put your user IDs here
          - user: "USER_ID_2"
        config:
          can_use: true
          can_eligible: true
          can_performance: true
          can_add_server_from_invite: true
          can_list_dashboard_perms: true
```

### Reloading the global config

If you are defined as staff on the `STAFF` environment variable, you will be able to use the [`bot_reload_global_plugins`](./bot-control.md#bot-reload-global-plugins) commands in order to reload your global config without restarting your bot.
