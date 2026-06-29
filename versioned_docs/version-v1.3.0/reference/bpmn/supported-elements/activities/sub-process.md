---
sidebar_position: 50
---
# Sub Process

A Sub Process is a process scope embedded directly inside the parent process, used to group part of the flow.

## Key characteristics

- Contains its own flow, starting from a start event.
- Runs in its own scope.

## Variables

Variables are not inherited or returned automatically; explicit input/output mappings are required.

## Graphical notation

A rounded rectangle containing the embedded flow (expanded) or a `+` marker (collapsed).

## XML Definition

`xml
<bpmn:subProcess id="handlePayment" name="Handle payment">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
  <!-- embedded flow elements -->
</bpmn:subProcess>
`

## Current Implementation

Supported.
