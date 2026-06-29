---
sidebar_position: 40
---
# Business Rule task

A Business Rule Task delegates a decision to a set of business rules instead of coding the logic into the flow.

## Key characteristics

- One incoming and one outgoing sequence flow.
- Evaluates a decision and returns its result to the process.

## Behavior

Evaluated by the built-in DMN engine (DMN = Decision Model and Notation — the standard for decision tables).

## Graphical notation

A rounded rectangle with a table icon in the top-left.

![Business rule task usage example](./../../../assets/bpmn/business_rule_task.svg)

## XML Definition

`xml
<bpmn:businessRuleTask id="decideDiscount" name="Decide discount">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:businessRuleTask>
`

## Current Implementation

Supported, through the internal DMN engine.
