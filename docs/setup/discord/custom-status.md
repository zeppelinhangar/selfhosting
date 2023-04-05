---
title: Custom Activity
description: How to set up a custom Activity for your bot
hide_table_of_contents: false
sidebar_position: 3
---

1. Locate line 360 of [backend/src/index.ts](https://github.com/Dragory/ZeppelinBot/blob/master/backend/src/index.ts#L360).
2. Add e.g.,

   ```ts
   client.user?.setPresence({
     activities: [{ name: "zeppelins", type: "WATCHING" }],
   });
   ```

   to line 346 (under `startUptimeCounter()`).

   ![custom activity](/img/guides/discord/custom_activity.png "Custom Activity")

3. Rebuild & restart your instances.
