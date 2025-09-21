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

The following is an example of a `create` event for a ticket by a non-admin user:

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

The following is an example of an `update` event for a ticket by an admin user:

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
    "username": "admin"
  }
}
```