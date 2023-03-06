---
title: Cloudflare Guide (Outdated)
description: Hosting a dashboard on Cloudflare
hide_table_of_contents: false
---

# Dashboard Hosting on Cloudflare

:::warning
This guide is outdated and **will not work** for you.

This is pending a update to the main repo to change how environment variables are loaded.
:::

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
NODE_VERSION = 16
PYTHON_VERSION = 3.7
```

## Setting a Domain

This stage is **optional**, you may wish to use the default `https://[site]pages.dev` url.

This custom domain is for the DASHBOARD, not for the api.
![Cloudflare Domain](/img/guides/cloudflare/cloudflare-domain.png "Setting a CloudFlare domain")
