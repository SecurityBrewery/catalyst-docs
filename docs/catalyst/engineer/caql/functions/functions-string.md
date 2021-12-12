---
title: String
layout: default
description: For string processing, CAQL offers the following functions
license: |
  Adapted from https://github.com/arangodb/docs
  Under Apache License, Version 2.0, January 2004
  Full license https://github.com/arangodb/docs/blob/main/LICENSE
---

String functions
================

For string processing, CAQL offers the following functions:

LOWER()
-------

`LOWER(value) → lowerCaseString`

Convert upper-case letters in *value* to their lower-case counterparts.
All other characters are returned unchanged.

- **value** (string): a string
- returns **lowerCaseString** (string): *value* with upper-case characters converted
  to lower-case characters

**Examples**

```js
LOWER("AVOcado") // "avocado"
```

UPPER()
-------

`UPPER(value) → upperCaseString`

Convert lower-case letters in *value* to their upper-case counterparts.
All other characters are returned unchanged.

- **value** (string): a string
- returns **upperCaseString** (string): *value* with lower-case characters converted
  to upper-case characters

**Examples**

```js
UPPER("AVOcado") // "AVOCADO"
```
