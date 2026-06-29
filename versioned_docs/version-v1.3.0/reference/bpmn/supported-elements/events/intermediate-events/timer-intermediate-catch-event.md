---
sidebar_position: 3
---
# Timer Intermediate Catch Event

An intermediate event that pauses the flow and waits for a timer, then continues.

## Key characteristics

- Has one incoming and one outgoing sequence flow.
- Blocks the token until the timer elapses.

## Configuration

| Field | Format | Example |
|-------|--------|---------|
| Date | ISO 8601 datetime | `2026-10-01T12:00:00Z` |
| Duration | ISO 8601 duration | `PT15S`, `P14D` |
| Cycle | ISO 8601 repeat or cron | `R5/PT10S` |

## Graphical notation

A double-line circle with a clock icon.

![Timer intermediate catch event usage example](./../../../../assets/bpmn/timer_intermediate_catch_event.svg)

## XML Definition

`xml
<bpmn:intermediateCatchEvent id="wait" name="Wait 15s">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
  <bpmn:timerEventDefinition>
    <bpmn:timeDuration>PT15S</bpmn:timeDuration>
  </bpmn:timerEventDefinition>
</bpmn:intermediateCatchEvent>
`

## Current Implementation

Supported.
