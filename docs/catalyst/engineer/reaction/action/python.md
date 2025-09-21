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
It can be used to interact with the Catalyst API

```python
import os

import requests

url = os.environ["CATALYST_APP_URL"]
header = {"Authorization": "Bearer " + os.environ["CATALYST_TOKEN"]}

# Get users
users = requests.get(url + "/api/users", headers=header).json()
```
