---
title: Mod Actions
sidebar_position: 1
position: 1
---

#### Name in config: `mod_actions`

This plugin contains the 'typical' mod actions such as warning, muting, kicking, banning, etc.

To enable this plugin with default configuration, add `mod_actions: {}` to
the `plugins` list in config.

View [default configuration](https://zeppelin.gg/docs/plugins/mod_actions/configuration).

## Plugin breakdown

### Sanction Notification

These first config options define how Zeppelin will interact with the users sanctioned.

#### DM Values

The values `dm_on_warn`, `dm_on_kick`, and `dm_on_ban` determine whether a user will be notified of their sanctions
through DMs. Ignoring privacy settings, setting these to `true` will notify the user, and `false` keeps them in the
dark. Note: `tempban` actions take the `ban` configuration.

#### Channel values

The other set of notifying options `message_on_warn`, `message_on_kick`, and `message_on_ban` are similar to their
`DM` counterparts, but, taking the value of `message_channel` they notify a channel instead. Note: `tempban` actions
take the `ban` configuration.

##### Notifying messages

Both of these notifying options take the same message templates defined in `warn_message`, `kick_message`, and
`ban_message`. In the official documentation, you will see these written as one line, you can make the messages
multi-line like so:

```yaml
mod_actions:
  config:
    warn_message: |-
      I am a
      multi-line message!
```

However, the `tempban` action has its own message option that can be defined under `tempban_message`, it comes with an
exciting new variable: `banTime`.

### Alerts

Alerts are a nifty way for your mod-team to be notified of actors trying to evade sanctions by leaving and re-joining
your server. Define the channel in `alert_channel` and set `alert_on_rejoin` to `true`.

### Thresholds

Thresholds are useful for alerting moderators if a user is about to exceed a pre-determined number of cases. This can be
used to make your mod team consider whether harsher action is necessary. Define the threshold in `warn_notify_threshold`
, adjust the message under `warn_notify_message`, and enable `warn_notify_enabled`.

### Ban Message Deletion

You can adjust the day's worth of messages Zeppelin deletes under the `ban_delete_message_days` option. Do not append
your input with 'd'.

### Moderation Commands

It is recommended to read the [permissions' page](https://zeppelin.gg/docs/configuration/permissions) before continuing to set up this plugin.

Zeppelin has 5 core commands, `note`, `warn`, `mute`, `kick`, and `ban`; with `unban`, `view`, and `addcase` making 8.
By default, these are disabled for users levelled 0, and enabled for users level 50 and above.

This guide won't go into detail about using them, you can read that [here](https://docs.google.com/presentation/d/e/2PACX-1vQTFZW4NiJicngfAv36tLlWG5XjktVyZhljekOkzUyzsktwcNCH_Zm82Dm3r1c7S7vKOArJ6XIO5azC/pub?start=true&loop=false&delayms=60000&slide=id.gc6f9e470d_0_0).

If your moderation team has roles other than `Mod` and `Admin`, you'll most likely need to use overrides. The snippet
below shows how you would enable the `warn` command for roles granted level >=50 (Mod), and the `kick` command for roles
granted level >=100 (Admin).

```yaml
levels:
  "807693394393956422": 50 #Mod
  "807692231900135466": 100 #Admin

plugins:
  mod_actions:
    config:
      can_warn: false
      can_kick: false
    overrides:
      - level: ">=50"
        config:
          can_warn: true
      - level: ">=100"
        config:
          can_kick: true
```
