---
sidebar_position: 5
---

# HTTP / Webhook

The HTTP/Webhook trigger allows you to trigger a reaction when a webhook is received.
This trigger is useful when you want to trigger a reaction based on an event that occurs in an external system.

HTTP/Webhook triggers require a path to listen on.
The URL to trigger the reaction is generated based on the path you provide,
e.g. if you provide the path `/webhook`,
the URL to trigger the reaction will be `https://<catalyst_url>/reaction/webhook`.

You can additionally provide a secret token to secure the webhook.
The secret token is used to verify that the webhook request is coming from a trusted source.
It needs to be provided in the `Authorization: Bearer <token>` header of the HTTP request,
e.g. `Authorization: Bearer my_secret_token`.

The reaction editor will show an example URL that you can use to trigger the reaction.

## Event Data

The HTTP/Webhook trigger passes a JSON event to the action.

The following is an example of a webhook event:

```json
{
  "method": "POST",
  "path": "/webhook",
  "headers": [],
  "query": [],
  "body": "{\"name\": \"test\"}",
  "isBase64Encoded": false
}
```

## Response Data

If the action returns a response, the response will be sent back to the webhook source.

For simple text responses, the response will be sent back as the body of the response.
If the action returns a JSON response, in the following format, it will be used to construct the response:

```json
{
  "statusCode": 200,
  "headers": {
    "Content-Type": [
      "application/json"
    ]
  },
  "body": "{\"message\": \"success\"}",
  "isBase64Encoded": false
}
```