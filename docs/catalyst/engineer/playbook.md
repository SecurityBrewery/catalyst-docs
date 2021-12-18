---
sidebar_position: 30
---

# Playbooks

![Screenshot of the template part of a ticket](/screenshots/playbooks.png)

Playbooks define a list of tasks that should be completed to handle the ticket. Tasks in playbooks in Catalyst can be
manual analyst tasks or automated tasks. The playbook is described in a yaml format. The single fields in this format
are described in the following sections.

## Format

### name

Name of the playbook.

### tasks

Playbooks consists of tasks,

### tasks.&lt;task_id&gt;.name

Name for the single task.

### tasks.&lt;task_id&gt;.type

Type of the task, can be one of `task`, `question` or `automation`.
<dl>
<dt>task</dt>
<dd>Simple manual task for the analyst.</dd>
<dt>question</dt>
<dd>Question for the analyst. Requires `schema` to be set.</dd>
<dt>action</dt>
<dd>Automation trigger, requires `action` to be set.</dd>
</dl>

### tasks.&lt;task_id&gt;.schema

This field is only used when `type` is `question`.
<a href="https://json-schema.org/">JSON schema</a> that defines the expected answer from the analyst. This is used to
generate an input form which the analyst can fill. For advanced options like styling or more complex input
see <a href="https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/">VJSF</a>.

### tasks.&lt;task_id&gt;.automation

This field is only used when `type` is `automation`. This is a simple string that is used as a key for
automations.

### tasks.&lt;task_id&gt;.msg

This field is only used when `type` is `automation`. It can be used to map values from other sources to
the appropriate input of the automation.

<b>Example</b>

```yaml
...
hash:
  name: Hash the malware
  type: action
  automation: hash.sha1
  msg:
    payload: "playbook.tasks['input'].data['malware']"
...
```

This examples maps the output of the playbook question 'input' in the malware field to the 'msg.payload' field.

### tasks.&lt;task_id&gt;.next

Next defines which tasks should be run after this one. It consists of key value pairs. The keys are the id of the next
tasks while the value defines in which case the next task is run. If the value is unset (or null) this task is run in
any case.

```yaml
...
tasks:
  input:
    name: Upload malware if possible
    ...
    next:
      hash: "malware != ''"
...
```

### tasks.&lt;task_id&gt;.join

Usually tasks are run if one of the predecessors is completed and the next condition is met. If join is set to true all
predecessors are required to be completed and all conditions are met.
