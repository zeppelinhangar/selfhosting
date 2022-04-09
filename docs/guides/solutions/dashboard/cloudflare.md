---
title: Cloudflare Guide
description: Hosting a dashboard on Cloudflare
hide_table_of_contents: false
---

# Dashboard Hosting on Cloudflare

## Prerequisites

- [GitHub Fork of ZeppelinBot](https://github.com/Dragory/ZeppelinBot/fork)
- [Cloudflare Account](https://dash.cloudflare.com/sign-up)
- Functioning Api & Bot Services (View relevant OS guide)

## Creating your Cloudflare Project

1. On the Cloudflare dashboard, navigate to the pages section.
2. Create a new project.
3. Link an account and repository.

## Setup and Build

| Option                 | Value                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| Framework Preset       | None                                                                                                     |
| Build Command          | `cd backend && npm i --production=false && cd ../dashboard && npm i --production=false && npm run build` |
| Build output directory | `/dashboard/dist`                                                                                        |
| Root Directory         | /                                                                                                        |

### Environment Variables

```bash
API_URL = https://<your_api_url>.tld
NODE_ENV = production
```

## Setting a Domain

This stage is **optional**, you may wish to use the default `https://[site]pages.dev` url.

This custom domain is for the DASHBOARD, not for the api.
![Cloudflare Domain](/img/guides/cloudflare/cloudflare-domain.png "Setting a CloudFlare domain")

:::note

If you can't get the dashboard to point to the api url properly, you might have to permanently place the api url on your
GitHub source, like so: https://github.com/metal0/ZeppelinBot/blob/master/dashboard/.env (and then redeploy)

Cloudflare pages takes quite a while to deploy, so don't be surprised if your dashboard is outdated for a couple minutes
after you push an update
