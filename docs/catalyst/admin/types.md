---
sidebar_position: 45
---

# Ticket Types

Ticket types can be configured in the [admin interface](login.md), in the `types` collection.

There are two default ticket types: `Alert` and `Incident`, but you can add more types to fit your organization's needs.

[![Ticket type configuration](/screenshots/types.png)](/screenshots/types.png)

## Fields

### `singular` and `plural` Fields

The `singular` and `plural` fields are used to define the name of the ticket type.

### `icon` Field

The `icon` field is used to define the icon of the ticket type.
You can use [Lucide icons](https://lucide.dev/icons/),
but need to convert the icon name to camelCase, e.g. `flask-conical` becomes `FlaskConical`

### `schema` Field

The `schema` field is used to define the custom fields for details of the ticket type.
It uses a subset of the [JSON Schema](https://json-schema.org/) format to define the schema,
currently enum, boolean, string, and integer properties are supported without any additional constraints.

The following example shows a schema with the four different property types:

```json
{
  "type": "object",
  "properties": {
    "severity": {
      "type": "string",
      "enum": [
        "Low",
        "Medium",
        "High"
      ]
    },
    "false_positive": {
      "type": "boolean",
      "title": "False Positive"
    },
    "source": {
      "type": "string",
      "title": "Source"
    },
    "affected_user_count": {
      "type": "integer",
      "title": "Affected User Count"
    }
  }
}
```