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

from pocketbase import PocketBase

# Parse the ticket from the input
ticket = json.loads(sys.argv[1])

# Connect to the PocketBase server
client = PocketBase('http://127.0.0.1:8090')
client.auth_store.save(token=os.environ["CATALYST_TOKEN"])

# Get a random user
users = client.collection("users").get_list(1, 200)
random_user = random.choice(users.items)

# Assign the ticket to the random user
client.collection("tickets").update(ticket["record"]["id"], {
	"owner": random_user.id,
})
```