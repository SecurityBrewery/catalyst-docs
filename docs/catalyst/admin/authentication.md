---
sidebar_position: 60
---

# Authentication

## OIDC Authentication

Catalyst requires [OpenID Connect](https://openid.net/connect/) authentication for users. To use this authentication
method you need to create a new OIDC client via your OpenID Connect provider and [configure Catalyst](./config) to use it.

## Token Authentication

Catalyst supports token authentication. To use token authentication you need to create an API key via the web UI. 
Then you can use the API key as a token in the `PRIVATE-TOKEN` header.

```bash
curl \
  --header "PRIVATE-TOKEN: UPwC3RUdfaIritWqfGwrsiEWl8Qh_VXy" \
  https://try.catalyst-soar.com/api/users
```

## Bear Authentication

Catalyst also supports [Bearer authentication](https://datatracker.ietf.org/doc/html/rfc6750) for the API.
To use this authentication method you need to create a new bearer token via your OpenID Connect provider.
Then use the bearer token as a Bearer token in the `Authorization` header of your requests.
