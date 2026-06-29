---
sidebar_position: 2
---
# Message End Event

A Message End Event ends the current path and sends a defined message before doing so. Useful for notifying external systems or triggering other processes upon completion.

## Key characteristics

- Has no outgoing sequence flows.
- Sends the defined message and then ends the path.

## Graphical notation

A thick single-line circle with a filled envelope icon inside.

![Message end event](./../../../../assets/bpmn/message-end-event.svg)

## XML Definition

```xml
<bpmn:endEvent id="sendAndEnd" name="Send and end">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:messageEventDefinition messageRef="Message_1" />
</bpmn:endEvent>

<bpmn:message id="Message_1" name="OrderCompleted" />
```

## Current Implementation

Supported.

