---
sidebar_position: 30
---
# User task

A User Task represents work performed by a human. It pauses the instance until a person completes the task and submits input.

## Key characteristics

- One incoming and one outgoing sequence flow.
- Blocks the token until the task is completed.

## Variables

Supports input/output mappings for the data shown to and returned by the user.

## Graphical notation

A rounded rectangle with a person icon in the top-left.

![User task usage example](./../../../assets/bpmn/user_task.svg)

## XML Definition

`xml
<bpmn:userTask id="approve" name="Approve request">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:userTask>
`

## Current Implementation

Fully supported.
