---
sidebar_position: 45
---
# Script task

A Script Task runs a small script inline in the flow — for calculations, data transformation, or simple logic.

## Key characteristics

- One incoming and one outgoing sequence flow.
- Executes its script when the token arrives.

## Graphical notation

A rounded rectangle with a script icon in the top-left.

## XML Definition

`xml
<bpmn:scriptTask id="compute" name="Compute total">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:scriptTask>
`

## Current Implementation

*To confirm with the team.*
