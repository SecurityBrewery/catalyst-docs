---
sidebar_position: 10
collapsed: false
---

# Reactions

Reactions are a way to trigger actions based on events.
Each reaction is composed of a trigger and an action.
The trigger listens for events and the action is executed when the trigger is activated.

[![Reactions](/screenshots/reactions.png)](/screenshots/reactions.png)

## Triggers

- [HTTP / Webhook](./trigger/webhook): Trigger an action on an incoming HTTP request.
- [Collection Hook](./trigger/hook): Trigger an action on events (`create`, `update`, `delete`) on a collection.

## Actions

- [Python](./action/python): Execute a Python script.
- [HTTP / Webhook](./action/webhook): Send an HTTP request to a webhook URL.

## Examples

- [Assign new tickets to random users](./examples/assign_ticket): Assign new tickets to random users.
- [Ingest alerts](./examples/ingest_alerts): Ingest alerts from a webhook into a PocketBase collection.