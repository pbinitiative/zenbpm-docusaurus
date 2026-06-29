---
sidebar_position: 4
---
# Link Intermediate Catch Event

The receiving side of a link pair, matched to its throw counterpart by name.

## Key characteristics

- Has one outgoing sequence flow; no incoming flow.
- Resumes the flow where the matching throw left off.
- Used to keep large diagrams readable ("off-page connector").

## Graphical notation

A double-line circle with an unfilled arrow icon.

## XML Definition

`xml
<bpmn:intermediateCatchEvent id="linkIn" name="ContinueA">
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
  <bpmn:linkEventDefinition name="A" />
</bpmn:intermediateCatchEvent>
`

## Current Implementation

Supported.
