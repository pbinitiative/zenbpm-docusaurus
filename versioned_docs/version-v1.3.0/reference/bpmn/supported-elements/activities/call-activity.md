---
sidebar_position: 50
---
# Call Activity

A Call Activity invokes a separate, globally defined process as a reusable step. It is used to decompose complex processes and share sub-process logic across multiple parent processes.

## Key characteristics

- One incoming and one outgoing sequence flow.
- References another process by its definition key.
- The parent process waits for the called process to complete before continuing.
- Runs in its own variable scope.

## Difference from Sub Process

| | Call Activity | Sub Process |
|---|---|---|
| Definition | External, reusable process | Embedded inside the parent |
| Reuse | Can be called from multiple processes | Only within this process |
| Variables | Requires explicit mapping | Shares parent scope |

## Configuration

| Field | Description |
|---|---|
| Called process | Referenced by process definition key |
| Binding | Resolves to the **latest deployed version** |

## Graphical notation

A rounded rectangle with a thick border and a `+` marker (collapsed subprocess icon).

![Call activity usage example](./../../../assets/bpmn/call_activity.svg)

## XML Definition

```xml
<bpmn:callActivity id="runKycCheck" name="Run KYC check" calledElement="kyc-process">
  <bpmn:extensionElements>
    <zeebe:calledElement processId="kyc-process" propagateAllChildVariables="false" />
  </bpmn:extensionElements>
  <bpmn:incoming>Flow_1</bpmn:incoming>
  <bpmn:outgoing>Flow_2</bpmn:outgoing>
</bpmn:callActivity>
```

## Practical example

An onboarding process calls a reusable `kyc-process` to verify customer identity. The result (`kycPassed`, `kycRejectionReason`) is mapped back to the parent process and used in a subsequent gateway decision.

## Current Implementation

Supported with the following limitations:
- Direct process ID only (no version pinning — always uses the latest deployed version).
- Error handling and compensation on the Call Activity itself are not supported.
