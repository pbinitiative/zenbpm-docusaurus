---
sidebar_position: 2
---
# Message Intermediate Throw Event

An intermediate event that sends a defined message and then continues execution.

## Key characteristics

- Has one incoming and one outgoing sequence flow.
- Sends the message and continues without waiting.

## Graphical notation

A double-line circle with a filled envelope icon.

![Message throw event usage example](./../../../../assets/bpmn/message_throw_event.svg)

## XML Definition

`xml
<bpmn:intermediateThrowEvent id="sendMsg" name="Send message">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
  <bpmn:messageEventDefinition messageRef="Message_1" />
</bpmn:intermediateThrowEvent>
`

## Current Implementation

Supported.
