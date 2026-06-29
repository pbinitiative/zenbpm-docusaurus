---
sidebar_position: 60
---
# Parallel gateway

A Parallel (AND) gateway splits the flow into all outgoing paths at once and, as a merge, waits for all incoming paths.

## Key characteristics

- Diverging: activates all outgoing paths unconditionally.
- Converging: waits for tokens on all incoming paths before continuing.

## Graphical notation

A diamond with a "+" icon.

![Parallel gateway usage example](./../../../assets/bpmn/parallel_gateway.svg)

## XML Definition

`xml
<bpmn:parallelGateway id="fork" name="Do both">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_a</bpmn:outgoing>
  <bpmn:outgoing>Flow_b</bpmn:outgoing>
</bpmn:parallelGateway>
`

## Current Implementation

Supported, with a limitation: handles parallel flow correctly when only one parallel section overlaps at a time. Multiple nested or recursive parallel flows currently have undefined behaviour.
