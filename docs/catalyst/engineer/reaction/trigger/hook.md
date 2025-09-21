---
sidebar_position: 10
---

# Collection Hook

A collection hook is a trigger that is executed when a record in a collection is created, updated, or deleted.
Collections are `Tickets`, `Tasks`, `Comments`, `Timeline`, `Links`, and `Files`.
You can add multiple collections and events to a collection hook.

[![Reactions](/screenshots/reactions.png)](/screenshots/reactions.png)

## Event Format

Collection hooks pass a json event to the action.

The following is an example of an `update` event for a ticket by an admin user:

```json
{
  "action": "update",
  "collection": "tickets",
  "record": {
    "created": "2025-09-05T04:17:34.389899296Z",
    "description": "Potential insider threat flagged by behavior analysis tool.",
    "id": "alertHwdsKzYfp0F0",
    "name": "Security Patch Required",
    "open": false,
    "owner": "upQHtTlWbRa56",
    "schema": {},
    "state": {},
    "type": "alert",
    "updated": "2025-09-10T20:12:58.749166039Z"
  },
  "auth": {
    "id": "u94727b0f300e46",
    "username": "admin",
    "active": true,
    "name": "admin@catalyst-soar.com",
    "email": "admin@catalyst-soar.com",
    "created": "2025-09-21T17:16:07Z",
    "updated": "2025-09-21T17:16:07Z"
  }
}
```