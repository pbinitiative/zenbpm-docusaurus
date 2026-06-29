---
sidebar_position: 3
---
# Timer start event

A Timer Start Event starts a process instance at a specific time, after a duration, or on a recurring schedule.

## Key characteristics

- **Time-based trigger:** The process instance is created automatically when the specified time condition is met.
- **Supports three timer types:**
  - **Date:** Starts once at a specific date and time (ISO 8601).
  - **Duration:** Starts after a specified duration has elapsed.
  - **Cycle:** Starts repeatedly on a cron-based or repeating interval schedule.

## XML Definition

`xml
<bpmn:startEvent id="StartEvent_1" name="Start on schedule">
  <bpmn:outgoing>Flow_1</bpmn:outgoing>
  <bpmn:timerEventDefinition id="TimerEventDefinition_1">
    <bpmn:timeCycle xsi:type="bpmn:tFormalExpression">R/PT1H</bpmn:timeCycle>
  </bpmn:timerEventDefinition>
</bpmn:startEvent>
`

## Current Implementation

Supported.
