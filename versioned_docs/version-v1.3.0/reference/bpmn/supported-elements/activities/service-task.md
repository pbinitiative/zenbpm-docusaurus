---
sidebar_position: 20
---
# Service Task

A Service Task represents work performed automatically by a system or external service, with no human involvement. It is the primary way to integrate external logic into a BPMN process.

## Key characteristics

- One incoming and one outgoing sequence flow.
- The engine creates a **job** when the token arrives; an external worker picks it up and completes it.
- The token waits until the worker reports completion or failure.

## How it works

1. The engine reaches the Service Task and creates a job with a specific `jobType`.
2. An external **worker** application polls for jobs of that type (via REST or gRPC).
3. The worker executes the business logic and calls **Complete** (with optional output variables) or **Fail**.
4. The token moves to the next element.

## Graphical notation

A rounded rectangle with a gear icon in the top-left corner.

![Service task usage example](./../../../assets/bpmn/service_task.svg)

## XML Definition

```xml
<bpmn:serviceTask id="chargeCard" name="Charge card">
  <bpmn:extensionElements>
    <zeebe:taskDefinition type="payment-service" />
  </bpmn:extensionElements>
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:serviceTask>
```

The `type` attribute in `zeebe:taskDefinition` is the **job type** your worker must subscribe to.

## Practical example

A payment process uses a Service Task to charge a customer's card. A payment worker subscribes to the `payment-service` job type, calls the payment gateway, and completes the job with the transaction ID.

```
[Start] → [Validate order] → [Charge card] → [Send receipt] → [End]
                                    ↑
                             payment-service worker
```

## Current Implementation

Fully supported. See [How to implement a Job Worker](/docs/how-to/implement-job-worker) for a step-by-step guide.
