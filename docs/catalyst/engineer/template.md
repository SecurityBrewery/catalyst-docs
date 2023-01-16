---
sidebar_position: 20
---

# Templates

![Screenshot of the template part of a ticket](/screenshots/template.png)

Templates are based <a href="https://json-schema.org/">JSON schemas</a> that 
define the expected details of a ticket. For advanced options like styling or more complex input
see <a href="https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/">VJSF</a>.

## Minimal example

The following example shows a simple template with just a text input for a
description of the ticket. The `x-display` parameter is a [VJSF](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/)
addition to the JSON schema that creates a textarea input instead of a single
line text input.

```json
{
  "type": "object",
  "required": [ "description" ],
  "properties": {
    "description": {
      "title": "Description",
      "type": "string",
      "x-display": "textarea"
    }
  }
}
```

More examples can be found in the [GitHub repository](https://github.com/SecurityBrewery/catalyst/tree/main/database/migrations/templates).
