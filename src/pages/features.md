---
title: Features
---

## Ticket (Alert & Incident) Management

![Screenshot of a ticket](/screenshots/ticket.png)

Tickets are the core of Catalyst. They represent alerts, incidents, forensics
investigations, threat hunts or any other event you want to handle in your
organisation.

---

## Ticket Templates

<center>
  <img width="400" style={{float: 'right', marginLeft: '10px', marginBottom: '20px'}} alt="Screenshot of the playbook part of a ticket" src="/screenshots/details.png" />
</center>

Templates define the custom information for tickets. The core information for
tickets like title, creation date or closing status is kept quite minimal and other
information like criticality, description or MITRE ATT&CK information can be
added individually.

<hr style={{clear: 'both'}}/>

## Conditional Custom Fields

<center>
  <img width="400" style={{marginRight: '10px', marginBottom: '20px'}} alt="Screenshot of the playbook part of a ticket" src="/screenshots/conditional_custom_field_a.png" />
  <img width="400" alt="Screenshot of the playbook part of a ticket" src="/screenshots/conditional_custom_field_b.png" />
</center>

Custom Fields can be dependent on each other. So if you, for example choose 
"malware" as an incident type a custom field ask you to define it further as
ransomware, worm, etc. which a "phishing" incident would ask for the number
of received mails in that campaign.

<hr style={{clear: 'both'}}/>

## Playbooks

<center>
  <img style={{float: 'left', marginRight: '10px', marginBottom: '20px'}} alt="Screenshot of the playbook part of a ticket" src="/screenshots/phishing_playbook.png" />
</center>

Playbooks represent processes that can be attached to tickets. Playbooks can 
contain manual and automated tasks. Complex workflows with different workflow
branches, parallel tasks and task dependencies can be modeled.

<hr style={{clear: 'both'}}/>

## Automations

<center>
  <img style={{marginRight: '10px', marginBottom: '20px'}} alt="Screenshot of the playbook part of a ticket" src="/screenshots/script.png" />
</center>

Automations are scripts that automate tasks or enrich artifacts. Automations are
run in their own Docker containers. This enables them to be created in different
scripting languages and run securely in their own environment. 

<hr style={{clear: 'both'}}/>

## Users

<center>
  <img style={{float: 'left', marginRight: '10px', marginBottom: '20px'}} alt="Screenshot of the playbook part of a ticket" src="/screenshots/roles.png" />
</center>

Catalyst has two different types of users, normal users accessing the platform
via OIDC authentication and API keys for external script. A
fine-grained access model is available for both types and allows to define 
possible actions for each user.

<!--

<span class="chip">Enterprise only</span>

## Group Management

Catalyst Enterprise allows you to define groups that can be used for the ticket 
access permissions.

<span class="chip">Enterprise only</span>

## Ticket Level Permissions

Ticket can be restricted to be viewable or editable by certain users or groups 
only. This enables you the share more delicate incidents only with a limited 
part of the overall users.

<span class="chip">Enterprise only</span>

## Alert Ingestion Filter

Alert Ingestion Filters run on every created event and allow automated actions
like setting the severity for new incidents automatically or auto-closing noisy 
alerts.

<span class="chip">Enterprise only</span>

## Ticket Graph

The Ticket Graph is an explorative view on tickets and artifacts to visualize
relations and clusters of those.


-->
