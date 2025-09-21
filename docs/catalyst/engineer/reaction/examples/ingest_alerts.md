---
sidebar_position: 5
---

# Ingest Alerts

This example demonstrates how to ingest alerts from a webhook into a PocketBase collection.

The trigger for this example is a [webhook trigger](../trigger/webhook.md) that receives alerts from an external system. 
The webhook trigger passes a JSON event to the [Python action](../action/python.md) that contains the alert data.
The alert data is then used to create a new alert ticket.

```python
import sys
import json
import os

import requests

# Parse the event from the webhook payload
event = json.loads(sys.argv[1])
body = json.loads(event["body"])

url = os.environ["CATALYST_APP_URL"]
header = {"Authorization": "Bearer " + os.environ["CATALYST_TOKEN"]}

# Create a new ticket
requests.post(url + "/api/tickets", headers=header, json={
    "name": body["name"],
    "type": "alert",
    "open": True,
})
```
