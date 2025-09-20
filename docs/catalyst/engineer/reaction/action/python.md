---
sidebar_position: 10
---

# Python

Python action is a type of action that allows you to run Python code in response to a trigger.
You can use this action to perform any kind of operation that can be done using Python code.

:::warning

Python action is a powerful feature and can be used to perform any kind of operation on your data.
The Python code is executed in the same environment as the Catalyst server,
so be careful with the code you write and who has access to it.
:::

[![Reactions](/screenshots/reaction_action_python.png)](/screenshots/reaction_action_python.png)

## Event Data

The Python action receives the event data from the trigger in the first argument.
The event data is a JSON object that contains the data related to the trigger event.

To parse the event data in the Python code, you can use the following code:

```python
import sys
import json

# Parse the ticket from the input and print the ticket id
ticket = json.loads(sys.argv[1])
print("id", ticket["record"]["id"])
```

## Authentication

The Python action provides a temporary `CATALYST_TOKEN` environment variable that can be used to authenticate with the
Catalyst API.
It can be used in combination with the [PocketBase Python SDK](https://github.com/vaphes/pocketbase)
to interact with the Catalyst API

```python
import os

from pocketbase import PocketBase

# Connect to the PocketBase server
client = PocketBase('http://127.0.0.1:8090')
client.auth_store.save(token=os.environ["CATALYST_TOKEN"])

# Get users
users = client.collection("users").get_list(1, 200)
```
