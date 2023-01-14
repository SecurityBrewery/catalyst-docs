---
sidebar_position: 10
---

# Install

:::tip

If you just want to try Catalyst you can also use the [demo](/demo).

:::

There are many ways to install Catalyst. The following describes a reference architecture on an Ubuntu 22.04 server.
Feel free to adapt it to your needs.

![Reference architecture for catalyst](reference_architecture.png)

## Installation Script

The installation script will create secrets and set up a `docker compose` deployment.
It is tested on Ubuntu 22.04 but should work on other Linux distributions and macOS as well.

The script will create the users:

- `alice` an analyst account with password `alice`
- `bob` an analyst account with password `bob`
- `admin` an admin account with password `admin`

### Installation Process

1. Set up 2 new (sub)domains, one for catalyst and one for authelia (OIDC user management).
2. Set up a proxy or load balancer (e.g. traefik or nginx)
   1. Point the domains from step 1 to the proxy
   2. Set up SSL termination, if you use self-signed certificates see also the [section below](#self-signed-certificates)
   3. Forward all traffic to port 80 of the catalyst server (see below) 
3. Set up the catalyst server
   1. Set up a Ubuntu 22.04 server
   2. Ensure [Docker](https://docs.docker.com/engine/install/),
      [Docker Compose](https://docs.docker.com/compose/install/),
      `unzip`, `curl`, `openssl`, and `sed` are installed.
   3. Download the installation script:
      ```bash
      curl -sL https://raw.githubusercontent.com/SecurityBrewery/catalyst-setup/v0.10.1/install_catalyst.sh -o install_catalyst.sh
      ```
   4. Run the installation script:
      ```bash
      bash install_catalyst.sh <hostname> <authelia_hostname>
      # e.g. bash install_catalyst.sh \
      #        https://try.catalyst-soar.com \
      #        https://authelia-try.catalyst-soar.com
      ```
   5. Wait for the installation to finish. Catalyst will be available at `<hostname>`.
   6. Log in with the credentials from above.

## User Management

Users are managed by [Authelia](https://www.authelia.com/).
The `user_database.yml` file is located at `authelia/user_database.yml`.

You can also use other OIDC providers like [Keycloak](https://www.keycloak.org/).
Adjust the `OIDC_*` environment variables in the `docker-compose.yml` file and remove the `authelia` service if you want
to do that.

## Self-Signed Certificates

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
