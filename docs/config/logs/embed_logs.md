---
title: Embed logs
sidebar_position: 1
position: 1
---

# Embed Logs

### Emoji Mention

All emoji used within these logs is from [The Hangar](https://discord.gg/uTcdUmF6Q7) server, however, due to Zeppelin logs using webhooks to send messages, you will be able to access these emoji even if your bot user is not on the server, so long as your bot has the `Use External Emojis` permission.

#### Name in config: `logs`

````yaml
plugins:
  # [...]

  logs:
    config:
      # [...]

      ping_user: true
      allow_user_mentions: false
      include_embed_timestamp: true
      format:
        timestamp: ""
        CASE_CREATE: >-
          ✏ {userMention(mod)} manually created new **{caseType}** case
          (#{caseNum})

        CASE_DELETE:
          embed:
            description: |-
              <:status_busy:907236237532856380> `[{case.case_number}]`**case deleted** by {userMention(mod)}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{mod.avatarURL}"

        CASE_UPDATE:
          embed:
            description: |-
              <a:store:907962521711956008> `[{caseNumber}]` `[{caseType}]` **case updated** by {userMention(mod)} with note: {if(gt(strlen(note), 2040), concat(slice(note, 0, 2040), " [...]"), note)}
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{mod.avatarURL}"

        BOT_ALERT:
          embed:
            description: |-
              <:warn:907937810735067176> **Bot alert**
              {tmplEval(body)}
            color: 0xffb347 #pastel orange

        DM_FAILED:
          embed:
            description: |-
              :construction: **Failed to send DM** to {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}
              Source: {source}
            thumbnail:
              url: "{user.avatarURL}"

        # MODERATION
        MEMBER_NOTE:
          embed:
            description: |-
              :notepad_spiral: `[{caseNumber}]` **note** on {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} by {userMention(mod)}
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_WARN:
          embed:
            description: |-
              <:warn2:907942967329824778> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} warned** by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xfdfd96 #pastel yellow
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_MUTE:
          embed:
            description: |-
              <:mute:907774320426778645> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} muted forever** by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_TIMED_MUTE:
          embed:
            description: |-
              <:mute:907774320426778645> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} muted** for {time} by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MASSMUTE: "<:mute:907774320426778645> {userMention(mod)} massmuted {count} users"

        MEMBER_UNMUTE:
          embed:
            description: |-
              <:vc_connect:907774222728826981> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was unmuted** by {userMention(mod)}> {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_TIMED_UNMUTE:
          embed:
            description: |-
              <:vc_connect:907774222728826981> **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was scheduled to be unmuted in** {time} by {userMention(mod)}.
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_MUTE_EXPIRED:
          embed:
            description: |-
              <:vc_connect:907774222728826981> {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}'s **mute expired**
            color: 0xfdfd96 #pastel yellow
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_KICK:
          embed:
            description: |-
              <:kick:907937608083079169> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was kicked** by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_BAN:
          embed:
            description: |-
              <:ban:907937629494992916> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was banned** by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_TIMED_BAN:
          embed:
            description: |-
              <:ban:907937629494992916> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was temp banned** for {banTime} by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_FORCEBAN:
          embed:
            description: |-
              <:ban:907937629494992916> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was force banned** by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MASSBAN:
          embed:
            description: |-
              <:ban:907937629494992916> **{userMention(mod)} massbanned {count} users**
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{mod.avatarURL}"

        MEMBER_SOFTBAN:
          embed:
            description: |-
              <:ban:907937629494992916> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}** (created {account_age} ago) **softbanned** by {userMention(mod)}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_UNBAN:
          embed:
            description: |-
              <:unban:907937553989111839> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} was unbanned** by {userMention(mod)} {if(eq(reason, ""), "", concat("for reason: `", if(gt(strlen(reason), 3000), concat(slice(reason, 0, 3000), " [...]"), reason), "`"))}
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{user.avatarURL}"

        MEMBER_TIMED_UNBAN:
          embed:
            description: |-
              <:unban:907937553989111839> `[{caseNumber}]` **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} Unbanned** by {userMention(mod)}. 
              The original ban time was {banTime}
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{user.avatarURL}"

        MASSUNBAN:
          embed:
            description: |-
              <:unban:907937553989111839> **{userMention(mod)} mass unbanned {count} users**
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{mod.avatarURL}"

        MEMBER_JOIN:
          embed:
            description: |-
              <:server_join:907937760080429076> {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} **joined**
              Created {account_age} ago
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_JOIN_WITH_PRIOR_RECORDS:
          embed:
            description: |-
              :warning: **{userMention(member)}** joined with prior records
              Summary:{recentCaseSummary}
            color: 0xfdfd96 #pastel yellow
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_MUTE_REJOIN:
          embed:
            description: |-
              <:mute:907774320426778645> **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} rejoined with a active mute**
            color: 0xfdfd96 #pastel yellow
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_RESTORE:
          embed:
            description: |-
              <a:green_tick:907956110072360992> **Member restore** for {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}
              Data Restored: {restoredData}
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_LEAVE:
          embed:
            description: |-
              <:server_leave:907937741109608460> **{if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} left the server**
              {if(and(member, member.joinedAt, gt(member.joinedAt, 0)), concat("<:server_join:907937760080429076> <t:", round(div(member.joinedAt, 1000), 0), ":F> <t:", round(div(member.joinedAt, 1000), 0), ":R>"))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_ROLE_ADD:
          embed:
            description: |-
              <:role_add:907774157536776234> **Roles added** to {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}: {roles}
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_ROLE_REMOVE:
          embed:
            description: |-
              <:role_remove:907774114457063487> **Roles removed** from {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}: {roles}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_ROLE_CHANGES:
          embed:
            description: |-
              <:role_change:907774141124460588> **Role changes** for {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}
              <:server_leave:907937741109608460> **{removedRoles}** 
              <:server_join:907937760080429076> **{addedRoles}**
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_NICK_CHANGE:
          embed:
            description: |-
              :pencil: **Nickname change** for {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}
              `{oldNick}` to **{newNick}**
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{member.avatarURL}"

        MEMBER_USERNAME_CHANGE:
          embed:
            description: |-
              :pencil: **User change** by {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))}
              `{oldName}` to `{newName}`
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{user.avatarURL}"

        CHANNEL_CREATE:
          embed:
            description: |-
              <:channel_created:907773557675794483> **Channel created** <#{channel.id}>
            color: 0x77dd77 #pastel green

        CHANNEL_DELETE:
          embed:
            description: |-
              <:channel_deleted:907773557646434304> **Channel deleted** {channel.name}
            color: 0xff6666 #pastel red

        CHANNEL_UPDATE:
          embed:
            description: |-
              <:channel_updated:907773557650649120> **Channel edited**: {channelMention(newChannel)}
              Changes: {differenceString}
            color: 0xffb347 #pastel orange

        THREAD_CREATE:
          embed:
            description: |-
              <:thread_created:907773963017551933> Thread {channelMention(thread)} was created in channel <#{thread.parentId}>
            color: 0x77dd77 #pastel green

        THREAD_DELETE:
          embed:
            description: |-
              <:thread_deleted:907773934156533770> Thread {channelMention(thread)} was deleted/archived from channel <#{thread.parentId}>
            color: 0xff6666 #pastel red

        THREAD_UPDATE:
          embed:
            description: |-
              <:thread_updated:907773950329757757> Thread {channelMention(newThread)} was edited.
              Changes: {differenceString}
            color: 0xffb347 #pastel orange

        STAGE_INSTANCE_CREATE:
          embed:
            description: |-
              <:stage_created:907773828720119858> Stage Instance `{stageInstance.topic}` was created in <a:stage:907962521242173511>Stage Channel <#{stageChannel.id}>
            color: 0x77dd77 #pastel green

        STAGE_INSTANCE_DELETE:
          embed:
            description: |-
              <:stage_deleted:907773784235327529> Stage Instance `{stageInstance.topic}` was deleted in <a:stage:907962521242173511>Stage Channel <#{stageChannel.id}>
            color: 0xff6666 #pastel red

        STAGE_INSTANCE_UPDATE:
          embed:
            description: |-
              <:stage_updated:907773784726065282> Stage Instance `{newStageInstance.topic}` was edited in <a:stage:907962521242173511>Stage Channel <#{stageChannel.id}>.
              Changes: {differenceString}
            color: 0xffb347 #pastel orange

        EMOJI_CREATE:
          embed:
            description: |-
              {emoji.mention} Emoji **{emoji.name}** (`{emoji.id}`) was created
            color: 0x77dd77 #pastel green

        EMOJI_DELETE:
          embed:
            description: |-
              Emoji **{emoji.name}** (`{emoji.id}`) was deleted
            color: 0xff6666 #pastel red

        EMOJI_UPDATE:
          embed:
            description: |-
              {newEmoji.mention} Emoji **{newEmoji.name}** (`{newEmoji.id}`) was updated. 
              Changes:
              {differenceString}
            color: 0xffb347 #pastel orange

        STICKER_CREATE:
          embed:
            description: |-
              Sticker `{sticker.name} ({sticker.id})` was created. {if(eq(sticker.description, ""), "", concat("Description: `", sticker.description, "`"))} Format: {sticker.format}
            color: 0x77dd77 #pastel green

        STICKER_DELETE:
          embed:
            description: |-
              Sticker `{sticker.name} ({sticker.id})` was deleted.
            color: 0xff6666 #pastel red

        STICKER_UPDATE:
          embed:
            description: |-
              Sticker `{newSticker.name} ({sticker.id})` was updated.
              Changes: {differenceString}
            color: 0xffb347 #pastel orange

        ROLE_CREATE:
          embed:
            description: |-
              <:role_created:907774081401761852> **Role created**
              <@&{role.id}> **{role.name}**
            color: 0x77dd77 #pastel green

        ROLE_DELETE:
          embed:
            description: |-
              <:role_deleted:907774043925647451> **Role deleted**
              **{role.name}** `{role.id}`
            color: 0xff6666 #pastel red

        ROLE_UPDATE:
          embed:
            description: |-
              <:role_updated:907774060509954058> **Role updated**
              Role **{newRole.name}** (`{newRole.id}`) was edited.
              Changes:{differenceString}
            color: 0xffb347 #pastel orange

        MESSAGE_EDIT:
          embed:
            description: |-
              :pencil: **[Message edited](https://discord.com/channels/{after.guild_id}/{channel.id}/{after.id})** by {userMention(user)} in <#{channel.id}>
              **Before:**{if(gt(strlen(messageSummary(before)), 1850), concat(slice(messageSummary(before), 0, 1850), " [...]```"), messageSummary(before))}
              **After:**{if(gt(strlen(messageSummary(after)), 1850), concat(slice(messageSummary(after), 0, 1850), " [...]```"), messageSummary(after))}
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{user.avatarURL}"

        MESSAGE_DELETE:
          embed:
            description: |-
              <:trash_can:907937790132645909> **Message deleted** by {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} in <#{channel.id}>
              **Message Posted:** {concat("<t:", round(div(message.data.timestamp, 1000), 0), ":F>")}

              {if(gt(strlen(messageSummary(message)), 3700), concat(slice(messageSummary(message), 0, 3700), " [...]```"), messageSummary(message))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MESSAGE_DELETE_BULK:
          embed:
            description: |-
              <:trash_can:907937790132645909> **[{count} Messages deleted]({archiveUrl})** by {authorIds} in <#{channel.id}>
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        MESSAGE_DELETE_BARE:
          embed:
            description: |-
              <:trash_can:907937790132645909> **Message deleted** `{message.id}` in <#{channel.id}> (no more info available)
            color: 0xff6666 #pastel red

        MESSAGE_DELETE_AUTO:
          embed:
            description: |-
              <:trash_can:907937790132645909> **Message Auto Delete** `{message.id}`
              by <@{user.id}> in <#{channel.id}>
              {if(gt(strlen(messageSummary(message)), 2040), concat(slice(messageSummary(message), 0, 2040), " [...]```"), messageSummary(message))}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{user.avatarURL}"

        CLEAN:
          embed:
            description: |-
              :soap: **[{count} Messages cleaned]({archiveUrl})** by {userMention(mod)} in <#{channel.id}>
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{mod.avatarURL}"

        VOICE_CHANNEL_JOIN:
          embed:
            description: |-
              <:vc_connect:907774222728826981> **Voice connect** by {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} in <#{channel.id}>
            color: 0x77dd77 #pastel green
            thumbnail:
              url: "{member.avatarURL}"

        VOICE_CHANNEL_MOVE:
          embed:
            description: |-
              <:vc_move:907774208795361300> **Voice move** <#{oldChannel.id}> to <#{newChannel.id}> by {userMention(member)}
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{member.avatarURL}"

        VOICE_CHANNEL_FORCE_MOVE:
          embed:
            description: |-
              <:vc_move:907774208795361300> **Voice force move** {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} moved by {userMention(mod)}
              <#{oldChannel.id}> to <#{newChannel.id}>

        VOICE_CHANNEL_LEAVE:
          embed:
            description: |-
              <:vc_disconnect:907774196891926608> **Voice disconnect** by {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} in <#{channel.id}>
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{member.avatarURL}"

        VOICE_CHANNEL_FORCE_DISCONNECT:
          embed:
            description: |-
              <:vc_disconnect:907774196891926608> **Voice force disconnect**
              for {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} from <#{oldChannel.id}> by {userMention(mod)}
            color: 0xff6666 #pastel red
            thumbnail:
              url: "{member.avatarURL}"

        MESSAGE_SPAM_DETECTED:
          embed:
            description: |-
              <:red_circle:907956085707657296> {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} **spam detected** in {channelMention(channel)}: {description} (more than {limit} in {interval}s)
              {archiveUrl}

        OTHER_SPAM_DETECTED:
          embed:
            description: |-
              <:red_circle:907956085707657296> {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} **spam detected**: {description} (more than {limit} in {interval}s)

        SCHEDULED_MESSAGE:
          embed:
            description: |-
              ⏰ {userMention(author)} scheduled a message to be posted to
              {channelMention(channel)} on {datetime}
            color: 0xffb347 #pastel orange

        SCHEDULED_REPEATED_MESSAGE:
          embed:
            description: |-
              ⏰ {userMention(author)} scheduled a message to be posted to
              {channelMention(channel)} on {datetime}, repeated {repeatDetails}
            color: 0xffb347 #pastel orange

        REPEATED_MESSAGE:
          embed:
            description: |-
              ⏰ {userMention(author)} scheduled a message to be posted to
              {channelMention(channel)} {repeatDetails}
            color: 0xffb347 #pastel orange

        POSTED_SCHEDULED_MESSAGE:
          embed:
            description: |-
              Posted scheduled message (`{messageId}`) to {channelMention(channel)} as scheduled by {userMention(author)}
            color: 0xffb347 #pastel orange

        AUTOMOD_ACTION:
          embed:
            description: |-
              <a:search:910124092118663209> **Automod Action** {if(member, userMention(member), if(user, userMention(user), if(userId, concat("<@!", userId, ">"), "Unknown")))} triggered
              **Rule**: `{rule}`
              **Actions**: [{actionsTaken}]
              **Match**: {matchSummary}
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{user.avatarURL}"

        SET_ANTIRAID_USER:
          embed:
            description: |-
              <:warn:907937810735067176> **Anti-Raid**
              Antiraid level: **{level}**
            color: 0xffb347 #pastel orange
            thumbnail:
              url: "{user.avatarURL}"

        SET_ANTIRAID_AUTO:
          embed:
            description: |-
              <:warn:907937810735067176> **Auto Anti-Raid**
              Antiraid level: **{level}**
            color: 0xffb347 #pastel orange
````
