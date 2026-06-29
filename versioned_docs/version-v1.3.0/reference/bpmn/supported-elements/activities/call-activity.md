---
sidebar_position: 50
---
# Call activity

A Call Activity invokes a separate, globally defined process as a step, so logic can be reused from several places.

## Key characteristics

- One incoming and one outgoing sequence flow.
- References another process; waits for it to complete.
- Runs in its own scope.

## Configuration

| Field | Description |
|-------|-------------|
| Called process | Referenced by a direct process ID. |
| Binding | Resolves to the latest version only. |

## Variables

Variables are not shared automatically; explicit input/output mappings are required.

## Graphical notation

A rounded rectangle with a thick border and a collapsed marker.

![Call activity usage example](./../../../assets/bpmn/call_activity.svg)

## XML Definition

`xml
<bpmn:callActivity id="runSub" name="Run shared process" calledElement="SharedProcess">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:callActivity>
`

## Current Implementation

Supported, with limitations: direct process ID only; latest-version binding only; error handling and compensation on the call activity are not supported.
