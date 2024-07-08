---
sidebar_position: 45
---

# Ticket Types

Ticket types can be configured in the [admin interface](login.md), in the `types` collection.

There are two default ticket types: `Alert` and `Incident`, but you can add more types to fit your organization's needs.

[![Ticket type configuration](/screenshots/types.png)](/screenshots/types.png)

## Fields

- **singular**: The singular name of the ticket type.
- **plural**: The plural name of the ticket type.
- **icon**: The icon of the ticket type. You can use [Lucide icons](https://lucide.dev/icons/),
  but need to convert the icon name to camelCase, e.g. `flask-conical` becomes `FlaskConical`
- **schema**: The schema of the ticket type. The schema is used to generate the details form for the ticket type.
  You need use the [JSON Schema](https://json-schema.org/) format to define the schema,
  but currently only string properties are supported.