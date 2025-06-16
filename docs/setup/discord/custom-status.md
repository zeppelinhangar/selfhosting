---
title: Custom Activity
description: How to set up a custom Activity for your bot
hide_table_of_contents: false
sidebar_position: 3
---

1. Add the following import to [backend/src/index.ts](https://github.com/Dragory/ZeppelinBot/blob/master/backend/src/index.ts).
   ```ts
   import { ActivityType } from "discord.js";
   ```
2. Add e.g.,

   ```ts
   client.user?.setPresence({
     activities: [{ name: "zeppelins", type: ActivityType.Watching }],
   });
   ```

   to line 399 (under `startUptimeCounter()`). You can find all of the different ActivityType's [here](https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType).

   :::info
   If using the `Custom` ActivityType, set the activity's `state` instead of its `name`, eg:

   ```js
   client.user?.setPresence({
     activities: [
       { state: "Burning in a trashbin", type: ActivityType.Custom },
     ],
   });
   ```

   :::

   ![custom activity](/img/guides/discord/custom_activity.png "Custom Activity")

3. Rebuild & restart your instances.
