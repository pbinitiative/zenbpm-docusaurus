---
sidebar_position: 80
---
# Exclusive gateway

An Exclusive (XOR) gateway routes the flow down exactly one outgoing path, chosen by conditions.

## Key characteristics

- Diverging: evaluates outgoing conditions and takes exactly one path.
- If several conditions are true, the first in model order wins.
- A default flow can be defined as a fallback.
- Converging: forwards the first arriving token without waiting.

## Graphical notation

A diamond with an "X" icon.

![Exclusive gateway usage example](./../../../assets/bpmn/exclusive_gateway.svg)

## XML Definition

`xml
<bpmn:exclusiveGateway id="check" name="Amount?" default="Flow_default">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_high</bpmn:outgoing>
  <bpmn:outgoing>Flow_default</bpmn:outgoing>
</bpmn:exclusiveGateway>
`

## Current Implementation

Fully supported.
