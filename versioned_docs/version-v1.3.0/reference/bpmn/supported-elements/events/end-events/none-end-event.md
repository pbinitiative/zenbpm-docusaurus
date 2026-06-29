---
sidebar_position: 1
---
# None End Event

An End Event marks where a path of execution finishes — the process instance completes once no active tokens remain. The None End Event is the simplest variant: it ends the path without throwing any result.

## Key characteristics

- Has no outgoing sequence flows.
- A process may have several end events.
- No event definition element is attached — the path simply ends.

## Graphical notation

A thick single-line circle with no icon inside.

![End event usage example](./../../../../assets/bpmn/end_event.svg)

## XML Definition

```xml
<bpmn:endEvent id="endEvent" name="End">
  <bpmn:incoming>Flow_1</bpmn:incoming>
</bpmn:endEvent>
```

## Current Implementation

Supported.
