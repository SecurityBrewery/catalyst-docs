---
title: Document
layout: default
description: CAQL provides below listed functions to operate on objects / document values
license: |
  Adapted from https://github.com/arangodb/docs
  Under Apache License, Version 2.0, January 2004
  Full license https://github.com/arangodb/docs/blob/main/LICENSE
---

Document functions
==================

CAQL provides below listed functions to operate on objects / document values.
Also see [object access](../fundamentals-data-types#objects--documents) for
additional language constructs.

ATTRIBUTES()
------------

`ATTRIBUTES(document, removeInternal, sort) → strArray`

Return the top-level attribute keys of the *document* as an array.
Optionally omit system attributes and sort the array.

- **document** (object): an arbitrary document / object
- **removeInternal** (bool, *optional*): whether all system attributes (*_key*, *_id* etc.,
  every attribute key that starts with an underscore) shall be omitted in the result.
  The default is *false*.
- **sort** (bool, *optional*): optionally sort the resulting array alphabetically.
  The default is *false* and will return the attribute names in any order.
- returns **strArray** (array): the attribute keys of the input *document* as an
  array of strings

```js
ATTRIBUTES( { "foo": "bar", "_key": "123", "_custom": "yes" } )
// [ "foo", "_key", "_custom" ]

ATTRIBUTES( { "foo": "bar", "_key": "123", "_custom": "yes" }, true )
// [ "foo" ]

ATTRIBUTES( { "foo": "bar", "_key": "123", "_custom": "yes" }, false, true )
// [ "_custom", "_key", "foo" ]
```


HAS()
-----

`HAS(document, attributeName) → isPresent`

Test whether an attribute is present in the provided document.

- **document** (object): an arbitrary document / object
- **attributeName** (string): the attribute key to test for
- returns **isPresent** (bool): *true* if *document* has an attribute named
  *attributeName*, and *false* otherwise. An attribute with a falsy value (*0*, *false*,
  empty string `""`) or *null* is also considered as present and returns *true*.

```js
HAS( { name: "Jane" }, "name" ) // true
HAS( { name: "Jane" }, "age" ) // false
HAS( { name: null }, "name" ) // true
```

Note that the function checks if the specified attribute exists. This is different
from similar ways to test for the existance of an attribute, in case the attribute
has a falsy value or is not present (implicitly *null* on object access):

```js
!!{ name: "" }.name        // false
HAS( { name: "" }, "name") // true

{ name: null }.name == null   // true
{ }.name == null              // true
HAS( { name: null }, "name" ) // true
HAS( { }, "name" )            // false
```

Note that `HAS()` can not utilize indexes. If it's not necessary to distinguish
between explicit and implicit *null* values in your query, you may use an equality
comparison to test for *null* and create a non-sparse index on the attribute you
want to test against:

```js
FILTER !HAS(doc, "name")    // can not use indexes
FILTER IS_NULL(doc, "name") // can not use indexes
FILTER doc.name == null     // can utilize non-sparse indexes
```

MERGE()
-------

`MERGE(document1, document2, ... documentN) → mergedDocument`

Merge the documents *document1* to *documentN* into a single document.
If document attribute keys are ambiguous, the merged result will contain the values
of the documents contained later in the argument list.


- **documents** (object, *repeatable*): an arbitrary number of documents as
  multiple arguments (at least 2)
- returns **mergedDocument** (object): a combined document

Note that merging will only be done for top-level attributes. If you wish to
merge sub-attributes, use [MERGE_RECURSIVE()](#merge_recursive) instead.

Two documents with distinct attribute names can easily be merged into one:

```js
MERGE(
    { "user1": { "name": "Jane" } },
    { "user2": { "name": "Tom" } }
)

// { "user1": { "name": "Jane" }, "user2": { "name": "Tom" } }
```

When merging documents with identical attribute names, the attribute values of the
latter documents will be used in the end result:

```js
MERGE(
    { "users": { "name": "Jane" } },
    { "users": { "name": "Tom" } }
)

// { "users": { "name": "Tom" } }
```

`MERGE(docArray) → mergedDocument`

*MERGE* works with a single array parameter, too. This variant allows combining the
attributes of multiple objects in an array into a single object.

- **docArray** (array): an array of documents, as sole argument
- returns **mergedDocument** (object): a combined document

```js
MERGE(
    [
        { foo: "bar" },
        { quux: "quetzalcoatl", ruled: true },
        { bar: "baz", foo: "done" }
    ]
)
```

This will now return:

```js
{
    "foo": "done",
    "quux": "quetzalcoatl",
    "ruled": true,
    "bar": "baz"
}
```

MERGE_RECURSIVE()
-----------------

`MERGE_RECURSIVE(document1, document2, ... documentN) → mergedDocument`

Recursively merge the documents *document1* to *documentN* into a single document.
If document attribute keys are ambiguous, the merged result will contain the values
of the documents contained later in the argument list.

- **documents** (object, *repeatable*): an arbitrary number of documents as
  multiple arguments (at least 2)
- returns **mergedDocument** (object): a combined document

For example, two documents with distinct attribute names can easily be merged into one:

```js
MERGE_RECURSIVE(
    { "user-1": { "name": "Jane", "livesIn": { "city": "LA" } } },
    { "user-1": { "age": 42, "livesIn": { "state": "CA" } } }
)

// { "user-1": { "name": "Jane", "livesIn": { "city": "LA", "state": "CA" }, "age": 42 } }
```

*MERGE_RECURSIVE()* does not support the single array parameter variant that *MERGE* offers.

VALUES()
--------

`VALUES(document, removeInternal) → anyArray`

Return the attribute values of the *document* as an array. Optionally omit
system attributes.

- **document** (object): a document / object
- **removeInternal** (bool, *optional*): if set to *true*, then all internal attributes
  (such as *_id*, *_key* etc.) are removed from the result
- returns **anyArray** (array): the values of *document* returned in any order

```js
VALUES( { "_key": "users/jane", "name": "Jane", "age": 35 } )

// [ "Jane", 35, "users/jane" ]

VALUES( { "_key": "users/jane", "name": "Jane", "age": 35 }, true )

// [ "Jane", 35 ]
```
