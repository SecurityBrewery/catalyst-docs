---
sidebar_position: 10
---

# Tickets

![Screenshot of a ticket](/screenshots/ticket.png)

Tickets are the core of Catalyst. They represent alerts, incidents, forensics
investigations, threat hunts or any other event you want to handle in your
organisation.

## Change ticket type, title, status and owner

To change ticket type, title, status and owner just click on the respective 
element in the ui.

## Details

The details inputs are generated according to the selected 
[template](../engineer/template).

## Comments

Comments can be added by the analyst. They can contain 
[Markdown syntax](https://www.markdownguide.org/basic-syntax/)
to add more structured information.

## Playbooks

A ticket can contain multiple playbooks. Those playbooks show a short overview
of the playbook and all done and open tasks.

## References

References are simple links other systems or websites.

## Artifacts

Artifacts can be used for any kind of observed data like IPs, hostnames, mail 
addresses. Opening an artifact allows the analyst to trigger enrichments or 
other automations for the artifact. Artifacts also are used to correlate 
tickets.

## Related Tickets

Related tickets can be defined explicitly or implicitly by containing the same
artifacts.

## Files

Files offer the option to upload additional documents or evidences to the case.
