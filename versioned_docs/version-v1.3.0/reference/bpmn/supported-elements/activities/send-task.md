---
sidebar_position: 41
---
# Send Task

A Send Task sends a defined message and immediately continues execution without waiting for a response. It is functionally equivalent to a **Message Intermediate Throw Event** but modelled as a task shape.

## Key characteristics

- One incoming and one outgoing sequence flow.
- Sends the message and moves on — does not block the token.
- The message can trigger a Message Start Event or be correlated to a waiting Message Catch Event in another process.

## Graphical notation

A rounded rectangle with a filled envelope icon in the top-left corner.

## XML Definition

```xml
<bpmn:sendTask id="sendOrderConfirmation" name="Send order confirmation" messageRef="Message_OrderConfirmation">
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:sendTask>

<bpmn:message id="Message_OrderConfirmation" name="OrderConfirmation" />
```

## Practical example

After completing an order, a Send Task publishes an `OrderConfirmation` message. A separate notification process is listening for this message via a Message Start Event and sends an email to the customer.

## Current Implementation

Supported.
