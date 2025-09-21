---
sidebar_position: 10
---

# Installation

Catalyst is a self-hosted application. 
You can install it on your own server or use a cloud provider.

The latest release can be found on the [GitHub releases page](https://github.com/SecurityBrewery/catalyst/releases).
The releases contain binaries for Linux, macOS, and Windows.

Once you have downloaded the binary, and unpacked it, 
you can create an admin user with `./catalyst admin create admin@example.com mysecretpassword`.

Run the server with `./catalyst serve`.

For Windows you can use `catalyst.exe` instead of `./catalyst`.

## Configuration

In the `Settings` you can configure the `App URL` and the `SMTP` settings for email notifications and Python actions to
work correctly.

![Settings](/screenshots/settings.png)