---
title: 'Part Number Watcher – Validation and Traceability Enhancement'
description: Internal web application enhancement focused on improving part validation, traceability, and scan accuracy by reducing false rejections, validating vendor and receipt status, and optimizing workflow efficiency across multiple validation modules.

seo:
  image:
    src: '../../assets/images/project-partwatcher.jpg'
    alt: Part Number Watcher preview
---



## Project Overview

Part Number Watcher is an internal validation and traceability solution used in manufacturing operations to verify part-related information during relabel and receiving workflows. The enhancement focused on reducing false rejections, improving validation accuracy, and streamlining the scanning process by checking vendor status, receipt status, and previously validated records before allowing users to continue. The business goal was to reduce unnecessary rescans and improve operational efficiency during validation tasks. :contentReference[oaicite:2]{index=2}

## Objectives

1. Reduce false rejections during validation by improving business rules tied to vendor and receipt status.
2. Improve scan efficiency by detecting whether a receipt had already been validated successfully in another module.
3. Standardize validation behavior across multiple modules used in the operation.
4. Strengthen traceability by showing where previous validations occurred and by sending weekly report summaries by email. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}

## Key Features

### 1. Multi-Module Validation
The solution supported validation across three operational modules:
- **Unitary Validation**
- **OCR Validation**
- **Lot Validation**

Each module handled different scan inputs and validation scenarios while keeping a consistent decision flow. :contentReference[oaicite:5]{index=5}

### 2. Vendor and Status Validation
The system validated vendor/manufacturer conditions and record status rules to determine whether a scanned item should pass or fail. This logic was introduced to avoid incorrect rejections and improve decision accuracy during the scanning process. :contentReference[oaicite:6]{index=6}

### 3. Re-Scan Prevention and Pass/Reject History
In unitary validation, the system checked whether a receipt had already been scanned previously with a pass result. If so, it displayed the module where the validation occurred and prevented unnecessary re-entry of key fields. If the previous result was reject, users were allowed to continue validation. :contentReference[oaicite:7]{index=7}

### 4. Weekly Email Reporting
A weekly report was generated and sent by email to help teams review scanned records and validation activity for the operational week. :contentReference[oaicite:8]{index=8}

### 5. Unsaved/Error Reporting
The application also included reporting for unsaved or incorrect information when scanned data did not match expected values. :contentReference[oaicite:9]{index=9}

## Technology Stack

- **Backend:** .NET Core  / .NET 
- **Frontend:** Angular
- **Database:** SQL Server 2016
- **Data / Integration:** SQL Server packages and integration through external APIs
- **Architecture Support:** Unit testing included in the solution project
- **Deployment Environment:** IIS-based web application setup with virtual directory configuration. :contentReference[oaicite:10]{index=10}

## My Contribution

I contributed to the enhancement of this internal validation application by supporting both technical implementation and solution alignment with business requirements.

My involvement included:

- Enhancing validation rules across unitary, OCR, and lot-based workflows
- Supporting backend and frontend updates for rule execution and user flow
- Working with SQL Server and integration components to support validation and reporting
- Contributing to logic that prevents redundant scanning when a previous successful validation already exists
- Supporting report-related functionality for weekly operational visibility
- Collaborating with business and technical stakeholders to translate functional requirements into system behavior
- Participating in analysis, implementation, validation, and rollout support for the enhancement. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12}

## Outcome & Impact

This enhancement improved the reliability and efficiency of the validation process by reducing false rejections, avoiding unnecessary rescans, and increasing visibility into prior validation outcomes. It also helped standardize validation behavior across modules and supported better operational follow-up through reporting. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}

## Highlights

- Internal manufacturing validation and traceability solution
- Reduced false rejections through stronger business-rule validation
- Supported unitary, OCR, and lot validation workflows
- Added prior-pass detection and re-scan prevention logic
- Built with .NET Core, Angular, SQL Server, and API integrations