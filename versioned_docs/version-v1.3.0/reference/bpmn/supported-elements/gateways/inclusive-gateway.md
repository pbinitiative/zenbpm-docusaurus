---
sidebar_position: 70
---
# Inclusive gateway

An Inclusive (OR) gateway activates one or more outgoing paths whose conditions are true, so several branches can run at once.

## Key characteristics

- Diverging: takes every outgoing path whose condition is true.
- A default flow is taken only if no condition matches.
- Converging: waits for all active branches before continuing.

## Graphical notation

A diamond with an "O" (circle) icon.

![Inclusive gateway usage example](./../../../assets/bpmn/inclusive_gateway.svg)

## XML Definition

`xml
<bpmn:inclusiveGateway id="split" name="Which notifications?" default="Flow_default">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_email</bpmn:outgoing>
  <bpmn:outgoing>Flow_sms</bpmn:outgoing>
</bpmn:inclusiveGateway>
`

## Current Implementation

Fully supported.
