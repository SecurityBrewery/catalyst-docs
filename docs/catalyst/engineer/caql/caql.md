---
sidebar_position: 0
---

# Introduction

The query language for the Catalyst. It can be used as to filter tickets but is also used in other places like playbooks.

CAQL is based on a subset of [the ArangoDB Query Language (AQL)](https://www.arangodb.com/docs/stable/aql/) and shares 
some of its syntax. The following chapters are taken from the AQL Documentation. 

_Example:_
```js
status == 'open' AND (owner == 'bob' OR !owner)
```

## Fulltext search

:::info
This feature is available in CAQL but not in AQL.
:::

To search for a string a simple string query returns the tickets containing this
string.

_Example:_
```js
"needle" // returns all tickets containing the word needle
```

This can also be combined with other query elements.

_Example:_
```js
// returns all tickets containing the word needle where the owner is bob
owner == 'bob' AND "needle"
```
