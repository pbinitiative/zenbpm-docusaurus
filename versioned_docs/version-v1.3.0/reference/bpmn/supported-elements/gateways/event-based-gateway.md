---
sidebar_position: 90
---
# Event-Based gateway

An Event-Based gateway routes the flow by which event happens first; it waits for events instead of evaluating conditions.

## Key characteristics

- Diverging only; each outgoing path leads to a catching event.
- The first event to occur determines the route; the alternatives are cancelled.

## Graphical notation

A diamond with a pentagon-in-circle icon.

## XML Definition

`xml
<bpmn:eventBasedGateway id="waitFor" name="Reply or timeout">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_reply</bpmn:outgoing>
  <bpmn:outgoing>Flow_timeout</bpmn:outgoing>
</bpmn:eventBasedGateway>
`

## Current Implementation

Supported for Message and Timer events only. Other event types BPMN allows after this gateway (Signal, Conditional, Receive task) are not implemented.
