---
sidebar_position: 50
---

# Webhooks

Catalyst can send webhooks to other systems.
This can be used to trigger actions in other systems and create automated workflows.

## Configuration

Webhooks can be configured in the [admin interface](login.md), in the `webhooks` collection.
The webhook record in the following example sends `create`, `update`, and `delete` events for `tickets`
to `http://localhost:8080/webhook`.

[![Webhook configuration](/screenshots/webhooks.png)](/screenshots/webhooks.png)

## Example events

## `create` event by a user

The following example shows a `create` event for a ticket by a non-admin user:

```json
{
  "action": "create",
  "collection": "tickets",
  "record": {
    "collectionId": "tickets",
    "collectionName": "tickets",
    "created": "2024-07-07 01:31:02.110Z",
    "description": "",
    "id": "a0152zdnfzgow4z",
    "name": "test",
    "open": true,
    "updated": "2024-07-07 01:31:02.110Z"
  },
  "auth": {
    "avatar": "",
    "collectionId": "_pb_users_auth_",
    "collectionName": "users",
    "created": "2024-07-07 01:29:57.912Z",
    "emailVisibility": false,
    "id": "u_test",
    "name": "Alivia Cartwright",
    "updated": "2024-07-07 01:29:57.912Z",
    "username": "u_test",
    "verified": true
  }
}
```

## `update` event by an admin

Example of a `update` event, created by an admin user:

```json
{
  "action": "update",
  "collection": "tickets",
  "record": {
    "collectionId": "tickets",
    "collectionName": "tickets",
    "created": "2024-07-07 00:15:57.007Z",
    "description": "",
    "id": "tp0tppxc18slt9a",
    "name": "my ticket",
    "open": true,
    "updated": "2024-07-07 00:15:57.007Z"
  },
  "admin": {
    "id": "k72zfucb9kqmjyx",
    "created": "2024-07-06 23:48:03.137Z",
    "updated": "2024-07-06 23:48:03.137Z",
    "avatar": 0,
    "email": "admin@example.com"
  }
}
```