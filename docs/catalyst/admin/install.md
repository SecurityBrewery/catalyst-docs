---
sidebar_position: 10
---

# Install

If you just want to try Catalyst you can also use the [demo](/demo).

## Installation Script

The installation script will create secrets and set up a `docker compose` deployment.
It is tested on Ubuntu 22.04 but should work on other Linux distributions and macOS as well.

The script will create the users:

- `alice` an analyst account with password `alice`
- `bob` an analyst account with password `bob`
- `admin` an admin account with password `admin`

### Installation Process

1. Ensure [Docker](https://docs.docker.com/engine/install/),
   [Docker Compose](https://docs.docker.com/compose/install/),
   `unzip`, `curl`, `openssl`, and `sed` are installed.
2. Download the installation script:
   ```bash
   curl -sL https://raw.githubusercontent.com/SecurityBrewery/catalyst-setup/v0.10.1/install_catalyst.sh -o install_catalyst.sh
   ```
3. Run the installation script:
   ```bash
   bash install_catalyst.sh <domain> <hostname> <authelia_hostname>
   # e.g. bash install_catalyst.sh \
   #        catalyst-soar.com \
   #        https://try.catalyst-soar.com \
   #        https://authelia-try.catalyst-soar.com
   ```
4. Wait for the installation to finish. Catalyst will be available at `<hostname>`.
5. Log in with the credentials from above.

## User Management

Users are managed by [Authelia](https://www.authelia.com/).
The `user_database.yml` file is located at `authelia/user_database.yml`.

You can also use other OIDC providers like [Keycloak](https://www.keycloak.org/).
Adjust the `OIDC_*` environment variables in the `docker-compose.yml` file and remove the `authelia` service if you want
to do that.

## SSL Certificates

The installation script does not set up SSL certificates.
To use SSL certificates, you can either
[adjust the existing nginx reverse proxy](http://nginx.org/en/docs/http/configuring_https_servers.html) or move the
services behind another proxy or load balancer that handles SSL termination.

If you want to use SSL certificates those can be added into the `nginx` container at `/etc/nginx/certs/`.
You also have to adjust the `nginx` configuration in `nginx/nginx.conf` to use the certificates.

### Self-Signed Certificates

If you want to use self-signed certificates you might need to add them to the catalyst container,
so that it trusts the connection to the OIDC provider.

```yaml
…
catalyst:
  volumes:
    - "./mycert.crt:/etc/ssl/certs/mycert.crt:ro"
    - "./myroot.crt:/etc/ssl/certs/myroot.crt:ro"
  …
```
