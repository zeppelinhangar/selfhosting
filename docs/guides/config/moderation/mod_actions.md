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

### Plugin breakdown

As the plugin that handles your moderation side, it can get a bit finicky.

The values `dm_on_warn`, `dm_on_kick`, and `dm_on_ban` determine whether a user will be notified of their sanctions
through DMs. Ignoring privacy settings, setting these to `true` will notify the user, and `false` keeps them in the
dark. The other set of notifying options `message_on_warn`, `message_on_kick`, and `message_on_ban` are similar to their `DM`
counterparts, but, taking the value of `message_channel` they notify a channel instead. Note: `tempban` actions take the
`ban` configuration.

Both of these notifying options take the same message templates defined in `warn_message`, `kick_message`, and
`ban_message`.

```yaml title="https://zeppelin.gg/docs/plugins/mod_actions/configuration"
        warn_message: "You have received a warning on the {guildName} server: {reason}"
        kick_message: "You have been kicked from the {guildName} server. Reason given: {reason}"
        ban_message: "You have been banned from the {guildName} server. Reason given: {reason}"
        tempban_message: "You have been banned from the {guildName} server for {banTime}. Reason given: {reason}"
        alert_on_rejoin: false
        alert_channel: null
        warn_notify_enabled: false
        warn_notify_threshold: 5
        warn_notify_message: "The user already has **{priorWarnings}** warnings!
        Please check their prior cases and assess whether or not to warn anyways.
        Proceed with the warning?"
        ban_delete_message_days: 1
        can_note: false
        can_warn: false
        can_mute: false
        can_kick: false
        can_ban: false
        can_unban: false
        can_view: false
        can_addcase: false
        can_massunban: false
        can_massban: false
        can_massmute: false
        can_hidecase: false
        can_deletecase: false
        can_act_as_other: false
        create_cases_for_manual_actions: true
```
