---
sidebar_position: 10
---

# Installation

Catalyst is a self-hosted application. 
You can install it on your own server or use a cloud provider.

The latest release can be found on the [GitHub releases page](https://github.com/SecurityBrewery/catalyst/releases).
The release contains a binary for Linux, and macOS.

Once you have downloaded the binary, and unpacked it, you can start Catalyst with `cataylst serve`.

The console shows the server's admin UI URL, e.g. http://127.0.0.1:8090/_/.
Open it and create an admin account.

In the admin UI create users which can then log in to the user interface at http://127.0.0.1:8090/.

## Going to production

As Catalyst is based on PocketBase you can follow their
[Going to production](https://pocketbase.io/docs/going-to-production/) guide.
