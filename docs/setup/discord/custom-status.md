---
title: Custom Status
description: How to set up a custom status for your bot
hide_table_of_contents: false
sidebar_position: 3
---

1. Locate line 352 of [backend/src/index.ts](https://github.com/Dragory/ZeppelinBot/blob/master/backend/src/index.ts#L352).
2. Add e.g.,

   ```ts
   client.user?.setPresence({
     activities: [{ name: "zeppelins", type: "WATCHING" }],
   });
   ```

   to line 353 (under `startUptimeCounter()`).

   ![custom status](/img/guides/discord/custom_status.png "Custom Status")

3. Rebuild & restart your instances.
