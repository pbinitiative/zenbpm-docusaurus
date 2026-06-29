---
sidebar_position: 170
---
# Activity Multi-Instance

A configuration that runs the same activity multiple times over a collection of items — sequentially or in parallel.

## Key characteristics

- Applied to a task or subprocess, not a standalone element.
- Iterates over an input collection; results can be aggregated into an output collection.

## Behavior

- **Sequential:** one instance at a time, in order.
- **Parallel:** all instances at once.

## Graphical notation

Three short bars on the activity: vertical = parallel, horizontal = sequential.

![Parallel Multi-instance usage example](./../../../assets/bpmn/parallel.svg)

![Sequential Multi-instance usage example](./../../../assets/bpmn/sequential.svg)

## XML Definition

`xml
<bpmn:serviceTask id="notify" name="Notify approver">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
  <bpmn:multiInstanceLoopCharacteristics isSequential="false" />
</bpmn:serviceTask>
`

## Current Implementation

Supported (sequential and parallel). The completion condition (finishing early before all instances complete) is not supported yet.
