---
title: Features
---

### Ticket (Alert & Incident) Management

Tickets are the core of Catalyst.
They represent alerts, incidents, forensics investigations,
threat hunts or any other event you want to handle in your organisation.

<center>
    <a href="/screenshots/ticket.png">
      <img alt="Screenshot of a ticket" src="/screenshots/ticket.png" />
    </a>
</center>

### Tasks

Tasks are the smallest unit of work in Catalyst. They can be assigned to users and have a status.
Tasks can be used to document the progress of an investigation or to assign work to different users.

<center>
    <a href="/screenshots/tasks.png">
      <img alt="Screenshot of the tasks part of a ticket" src="/screenshots/tasks.png" />
    </a>
</center>

### Reactions

Reactions are a way to automate Catalyst.
Each reaction is composed of a trigger and an action.
The trigger listens for events and the action is executed when the trigger is activated.
There are triggers for HTTP/Webhooks and Collection Hooks and actions for Python and HTTP/Webhooks.

<center>
    <a href="/screenshots/reactions.png">
      <img alt="Screenshot of the reactions" src="/screenshots/reactions.png" />
    </a>
</center>

### Timelines

Timelines are used to document the progress of an investigation.
They can be used to document the steps taken during an investigation, the findings or the results of the investigation.

### Dashboards

Catalyst comes with a dashboard that presents the most important information at a glance.

<center>
    <a href="/screenshots/dashboard.png">
        <img alt="Screenshot of the dashboard" src="/screenshots/dashboard.png" />
    </a>
</center>

### Ticket Types

Templates define the custom information for tickets.
The core information for tickets like title, creation date or closing status is kept quite minimal
and other information like criticality, description or MITRE ATT&CK information can be added individually.

### Custom Fields

Custom fields can be added to tickets to store additional information.
They can be used to store information like the affected system, the attacker's IP address or the type of malware.
Custom fields can be added to ticket types and are then available for all tickets of this type.

### More

Catalyst supports a lot more features like: Links, Files, or Comments on tickets.