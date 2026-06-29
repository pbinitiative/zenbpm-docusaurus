---
sidebar_position: 42
---
# Receive Task

A Receive Task pauses the process and waits until a specific named message is received, then continues execution. It is functionally equivalent to a **Message Intermediate Catch Event** but modelled as a task shape.

## Key characteristics

- One incoming and one outgoing sequence flow.
- Blocks the token until the matching message arrives.
- The message is correlated by name and an optional correlation key.

## Graphical notation

A rounded rectangle with an envelope icon (outline) in the top-left corner.

## XML Definition

```xml
<bpmn:receiveTask id="waitForPaymentConfirmation"
                  name="Wait for payment confirmation"
                  messageRef="Message_PaymentConfirmed">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:receiveTask>

<bpmn:message id="Message_PaymentConfirmed" name="PaymentConfirmed" />
```

## Practical example

An order process pauses at a Receive Task after initiating payment. When the payment gateway confirms the transaction, it publishes a `PaymentConfirmed` message. The Receive Task correlates the message using the `orderId` and the process continues.

## Current Implementation

Supported. See [How to send and receive messages](/docs/how-to/send-receive-messages) for correlation details.

