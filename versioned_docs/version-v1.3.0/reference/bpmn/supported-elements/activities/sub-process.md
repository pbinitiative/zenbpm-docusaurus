---
sidebar_position: 55
---
# Sub Process

A Sub Process is a process scope embedded directly inside the parent process. It groups a set of activities, events, and gateways into a single collapsible unit, typically to improve diagram readability or to apply boundary events to a group of tasks.

## Key characteristics

- Contains its own flow starting from a start event.
- Runs within the parent process scope.
- Can have **Boundary Events** attached — they apply to the entire sub-process.
- When the sub-process completes, the parent token continues.

## Difference from Call Activity

| | Sub Process | Call Activity |
|---|---|---|
| Definition | Embedded in parent | External, separate process |
| Reuse | Not reusable | Can be called from multiple processes |
| Boundary Events | Supported | Not supported |
| Variables | Shares parent scope | Requires explicit mapping |

## Graphical notation

- **Expanded:** shows the embedded flow inside the rounded rectangle.
- **Collapsed:** shows only a `+` marker; the inner flow is hidden.

## XML Definition

```xml
<bpmn:subProcess id="handlePayment" name="Handle payment">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>

  <bpmn:startEvent id="SubStart" />
  <bpmn:serviceTask id="chargeCard" name="Charge card">
    <bpmn:extensionElements>
      <zeebe:taskDefinition type="payment-service" />
    </bpmn:extensionElements>
  </bpmn:serviceTask>
  <bpmn:endEvent id="SubEnd" />

  <bpmn:sequenceFlow sourceRef="SubStart" targetRef="chargeCard" />
  <bpmn:sequenceFlow sourceRef="chargeCard" targetRef="SubEnd" />
</bpmn:subProcess>
```

## Practical example

A checkout process wraps the payment steps (charge card, send receipt, update inventory) in a Sub Process. An Error Boundary Event on the sub-process catches any payment failure and routes to a fallback path — without needing individual boundary events on each task.

## Current Implementation

Supported. Error Boundary Events on sub-processes are supported.

