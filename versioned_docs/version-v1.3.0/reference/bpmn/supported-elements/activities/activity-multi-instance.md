---
sidebar_position: 170
---
# Multi-Instance Activity

A Multi-Instance configuration runs the same activity multiple times — once for each item in a collection. It can run sequentially (one at a time) or in parallel (all at once).

## Key characteristics

- Applied to a **task** or **sub-process** (not a standalone element).
- Iterates over an input collection variable.
- Results can be aggregated into an output collection variable.
- Two modes: **sequential** and **parallel**.

## Sequential vs. Parallel

| | Sequential | Parallel |
|---|---|---|
| Execution | One instance at a time, in order | All instances at once |
| Use when | Order matters, each result feeds the next | Independent items, speed is priority |
| Notation | Three horizontal bars at the bottom | Three vertical bars at the bottom |

## Graphical notation

![Parallel Multi-instance usage example](./../../../assets/bpmn/parallel.svg)

![Sequential Multi-instance usage example](./../../../assets/bpmn/sequential.svg)

## XML Definition

```xml
<bpmn:serviceTask id="notifyApprovers" name="Notify approver">
  <bpmn:extensionElements>
    <zeebe:taskDefinition type="notification-service" />
    <zeebe:ioMapping>
      <zeebe:input source="=approver" target="currentApprover" />
    </zeebe:ioMapping>
  </bpmn:extensionElements>
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
  <bpmn:multiInstanceLoopCharacteristics isSequential="false">
    <bpmn:loopDataInputRef>approvers</bpmn:loopDataInputRef>
    <bpmn:dataInput itemSubjectRef="approver" />
  </bpmn:multiInstanceLoopCharacteristics>
</bpmn:serviceTask>
```

## Practical example

An approval process needs to notify all managers in a department. The `approvers` variable holds a list of manager IDs. A parallel multi-instance Service Task sends a notification to each manager simultaneously.

```
approvers = ["mgr-1", "mgr-2", "mgr-3"]
→ 3 notification jobs created and processed in parallel
```

## Current Implementation

Supported (sequential and parallel). The **completion condition** (finishing early before all instances complete) is not yet supported.

