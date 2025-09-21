---
sidebar_position: 10
---

# Assign new tickets to random users

The following Python script assigns new tickets to random users in the system.
It can be combined with a [collection hook](../trigger/hook.md) that triggers on ticket creation.
After a ticket is created, 
the hook will pass the ticket data to the Python action, 
which will assign the ticket to a random user.

```python
import sys
import json
import random
import os

import requests

# Parse the ticket from the input
ticket = json.loads(sys.argv[1])

url = os.environ["CATALYST_APP_URL"]
header = {"Authorization": "Bearer " + os.environ["CATALYST_TOKEN"]}

# Get a random user
users = requests.get(url + "/api/users", headers=header).json()
random_user = random.choice(users)

# Assign the ticket to the random user
requests.patch(url + "/api/tickets/" + ticket["record"]["id"], headers=header, json={
    "owner": random_user["id"]
})
```