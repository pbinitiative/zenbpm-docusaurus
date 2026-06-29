---
sidebar_position: 45
---
# Script Task

A Script Task executes a script inline within the process flow. It is used for lightweight data transformations, calculations, or logic that does not require an external service.

## Key characteristics

- One incoming and one outgoing sequence flow.
- Executes synchronously when the token arrives — no external worker required.
- Can read and write process variables directly.

## Supported script languages

ZenBPM supports **FEEL** (Friendly Enough Expression Language) for script expressions. FEEL is the standard expression language defined in the DMN specification.

## Graphical notation

A rounded rectangle with a script/scroll icon in the top-left corner.

## XML Definition

```xml
<bpmn:scriptTask id="computeTotal" name="Compute order total" scriptFormat="feel">
  <bpmn:extensionElements>
    <zeebe:script expression="sum(items.amount)" resultVariable="orderTotal" />
  </bpmn:extensionElements>
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:scriptTask>
```

## Practical example

A processing task maps raw API data to process variables before passing them to a downstream decision:

```feel
{
  customerId: payload.customer.id,
  totalAmount: sum(payload.items.price),
  isVip: payload.customer.tier = "VIP"
}
```

## Current Implementation

Supported via FEEL expressions. See the [Script Engine reference](/reference/script-engine) for supported syntax and built-in functions.

