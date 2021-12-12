---
sidebar_position: 10
---

# Install

If you just want to try Catalyst you can also use https://try.catalyst-soar.com.

## Quick Local Test Installation

:::caution

This installation is insecure and should only be used for local testing.

:::


1. [Install Docker](https://docs.docker.com/engine/install/), 
   [Docker Compose](https://docs.docker.com/compose/install/)
   and [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   (if not already installed). 
2. Clone the setup repository `git clone https://github.com/SecurityBrewery/catalyst-setup`
3. Run `docker-compose -f docker-compose.yml -f docker-compose-insecure.yml up`
4. Wait a little (about 30s - 1m) for Keycloak. 
5. Open [https://localhost](http://localhost)
6. Login with bob:bob

## Full Installation

Installation assumes that you are running a current Linux, but should work on
other systems running Docker as well. 

For this installation we assume the domain for catalyst is https://catalyst.example.org.

1. [Install Docker](https://docs.docker.com/engine/install/).
2. [Install Docker Compose](https://docs.docker.com/compose/install/).
3. If not installed already, [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
4. Clone the setup repository `git clone https://github.com/SecurityBrewery/catalyst-setup`.
5. Replace `cert.pem` and `key.pem` with your own certificates
6. Edit `docker-compose-ssl.yml`:
   1. Edit the `nginx` reverse proxy service:
      1. Change certificates names if not `cert.pem` and `key.pem`.
7. Edit `docker-compose.yml`:
   1. Edit the `arangodb` database service:
      1. Change `ARANGO_ROOT_PASSWORD` to a random secret value.
   2. Edit the `emitter` bus service:
      1. Change `EMITTER_LICENSE` as described [here](https://github.com/emitter-io/emitter#get-license).
      2. Note down the secret key for later as well.
   3. Edit the `minio` storage service:
      1. Change `MINIO_ROOT_PASSWORD` to a random secret value.
   4. Edit the `postgres` service:
      1. Change `POSTGRES_PASSWORD` to a random secret value.
   5. Edit the `keycloak` authentication service:
      1. Remove the user `bob` from the `realm.json` 
      2. Change `DB_PASSWORD` to the value of `POSTGRES_PASSWORD` set in the `postgres` service
      3. Change `KEYCLOAK_PASSWORD` to a random secret value.
      4. Change `KEYCLOAK_FRONTEND_URL` to your domain (or IP).
   7. Edit the `catalyst` service:
      1. Change `SECRET` to a random secret value.
      2. Change `EXTERNAL_ADDRESS` to your catalyst domain (e.g. https://catalyst.example.org).
      3. [Create a new client in Keycloak](https://www.keycloak.org/docs/latest/server_admin/#proc-creating-oidc-client_server_administration_guide) or your own OpenID Connect system and change `OIDC_ISSUER`, `OIDC_CLIENT_ID` and `OIDC_CLIENT_SECRET` accordingly.
      4. Change the `ARANGO_DB_PASSWORD` to the value of `ARANGO_ROOT_PASSWORD` set in the `arangodb` service.
      5. Change the `S3_PASSWORD` to the value of `MINIO_ROOT_PASSWORD` set in the `minio` service.
      6. Change the `EMITTER_IO_KEY` to the key generated when creating the emitter license above.
      7. Change `INITIAL_API_KEY` to a random secret value.
8. Run `docker-compose -f docker-compose.yml -f docker-compose-ssl.yml up`
9. Open keycloak (e.g. https://catalyst.example.org:9002) in your browser
   1. Create a user
10. Open catalyst (e.g. https://catalyst.example.org) in your browser
    1. Login with the created user
