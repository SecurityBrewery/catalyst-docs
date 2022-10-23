---
sidebar_position: 40
---

# Backup

Catalyst contains an API endpoint to create backups which make backups quite easy. To create regular backups you can
create a new API key with the
`backup:read` permission. Then set up a cronjob somewhere with the following curl command:

```bash
curl \
  --header "PRIVATE-TOKEN: UPwC3RUdfaIritWqfGwrsiEWl8Qh_VXy" \
  --output backup-$(date -u +"%Y-%m-%dT%H-%M-%SZ").zip \
  https://try.catalyst-soar.com/api/backup/create
```

# Restore

:::danger

Be careful as the restore function will overwrite all data in the database.

:::

Restore takes a backup created with the backup endpoint and restores it to the Catalyst:

```bash
curl \
  --header "PRIVATE-TOKEN: UPwC3RUdfaIritWqfGwrsiEWl8Qh_VXy" \
  -F "backup=@/home/bob/backup-2021-12-12T13:58:32Z.zip" \
  https://try.catalyst-soar.com/api/backup/restore
```
