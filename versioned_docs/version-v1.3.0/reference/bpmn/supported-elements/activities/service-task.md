---
sidebar_position: 20
---
# Service task

A Service Task represents work performed automatically by a system, with no human involvement.

## Key characteristics

- One incoming and one outgoing sequence flow.
- The engine creates a job; an external worker completes it.

## Behavior

When the token reaches the task, the engine creates a *job*. An external *worker* application picks it up over the REST or gRPC API, performs the work, and completes the job — which moves the token on.

## Variables

Supports input/output mappings to pass data in and return results.

## Graphical notation

A rounded rectangle with a gear icon in the top-left.

![Service task usage example](./../../../assets/bpmn/service_task.svg)

## XML Definition

`xml
<bpmn:serviceTask id="charge" name="Charge card">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:serviceTask>
`

## Current Implementation

Fully supported.
