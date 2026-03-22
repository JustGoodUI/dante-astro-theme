---
title: 'Critical Control Forms – Expiration Control and Material Traceability System'
description: Internal web application designed to manage critical materials, validate expiration dates, improve traceability, and support operational compliance through controlled workflows, role-based access, and reporting.

seo:
  image:
    src: '../../assets/images/project-ccf.jpg'
    alt: Critical Control Forms preview
---



## Project Overview

Critical Control Forms is an internal web-based solution created to manage critical materials with expiration constraints across warehouse, controlled storage, and production workflows. The platform was designed to improve traceability, validate expiration dates at different operational stages, and reduce the risk of expired materials being used in production. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}

The system centralized material registration, validation, location tracking, split-container handling, reporting, and user access control in a single platform. It also integrated with external enterprise services to retrieve material data and supported operational decision-making through reports and dashboards. :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}

## Objectives

1. Centralize the control of critical materials with expiration dates in one application.
2. Validate expiration status throughout warehouse, controlled storage, and production workflows.
3. Improve traceability by tracking material location, status, and history.
4. Reduce the risk of expired materials reaching production.
5. Support reporting, compliance, and operational visibility with structured data and dashboards. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8}

## Key Features

### 1. Material Registration and Configuration
The system allowed users to add, update, and manage critical materials using identifiers such as HU, GRN, and Part Number, along with material type, supplier dates, expiration values, process status, and virtual labels. It also supported label printing and material setup for operational control. :contentReference[oaicite:9]{index=9}

### 2. Expiration Validation
A core capability of the application was validating material expiration status at different points in the process. Users could verify whether a material was still valid for use and prevent expired materials from moving forward in the workflow. The validation flow acted as an operational control to reduce risk on the production floor. :contentReference[oaicite:10]{index=10} :contentReference[oaicite:11]{index=11}

### 3. Quick Validation and Material Overview
The main page provided a fast validation experience with an overview of key material details and validation history. Users could review essential information such as GRN, part number, batch, supplier, status, expiration date, delivered date, and usage records, as well as a reference image of the material. :contentReference[oaicite:12]{index=12}

### 4. Controlled Storage and Stabilization Management
The platform included dashboards to manage material placement in controlled storage and stabilization processes. Users could register new records, consult current items, filter by identifiers, and export report data when needed. :contentReference[oaicite:13]{index=13}

### 5. Delivery and Return Workflow
A dedicated module allowed materials to be delivered to the line and returned when necessary, validating available quantities and controlling the amount that could be issued. This supported better execution and tighter material accountability. :contentReference[oaicite:14]{index=14}

### 6. End-of-Life and Discharge Control
The application allowed users to change material status when items were expired or empty, keeping a record for traceability and later consultation. This helped maintain cleaner inventories and stronger status control. :contentReference[oaicite:15]{index=15}

### 7. Location Tracking
The system showed the current location of each material, helping users understand where materials were stored or moved at any time. This improved visibility across warehouse and production-related areas. :contentReference[oaicite:16]{index=16} :contentReference[oaicite:17]{index=17}

### 8. Split-Container Management
The solution supported querying sub-containers derived from a main container and generating labels for partial usage scenarios. This helped maintain control over both parent and split quantities while preserving traceability and expiration references. :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}

### 9. Reporting and Dashboards
Users could consult operational reports with filters by GRN, part number, material type, supplier date, expiration date, process status, and virtual label. The solution also supported dashboard-style analytics through reporting tools for better visibility into material status and trends. :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21}

### 10. Role-Based Access and User Administration
The application included role and permission management, user administration, and protected access through enterprise identity controls. Different profiles had access to different functions based on operational responsibility. :contentReference[oaicite:22]{index=22} :contentReference[oaicite:23]{index=23}

## Technology Stack

- **Frontend:** Angular
- **Backend:** ASP.NET Core
- **Programming Language:** C#
- **Additional Server-Side Support:** Node.js / JavaScript
- **Database:** SQL Server
- **Authentication:** Okta with SAML-based access
- **Reporting:** Power BI and custom operational reports
- **Integrations:** External enterprise APIs and web services for material data retrieval
- **UI / Operational Support:** Scanner-based workflows and label-related validation
- **Source Control / Delivery:** Enterprise development and deployment pipeline structure. :contentReference[oaicite:24]{index=24} :contentReference[oaicite:25]{index=25}

## My Contribution

I contributed to the refactor and enhancement of this internal control platform, supporting both technical implementation and business-process alignment.

My involvement included:

- Participating in the refactor of the application to improve maintainability and operational usability
- Supporting the implementation of material registration, validation, tracking, and reporting features
- Collaborating on business-rule execution related to expiration control, delivery, returns, discharge, and split-container handling
- Working with Angular, ASP.NET Core, C#, SQL Server, and integrated services to support end-to-end functionality
- Contributing to requirement analysis, technical design alignment, and solution documentation
- Supporting delivery across project stages, from analysis and implementation to validation and rollout

This project strengthened my experience in internal enterprise platforms, traceability-driven workflows, and web applications built for operational control and compliance. :contentReference[oaicite:26]{index=26}

## Outcome & Impact

The solution improved control over critical materials by centralizing expiration validation, traceability, location tracking, and operational reporting in one platform. It reduced reliance on fragmented manual checks, increased visibility into material status, and supported safer operational decision-making through structured validations and controlled workflows. :contentReference[oaicite:27]{index=27} :contentReference[oaicite:28]{index=28}

## Highlights

- Internal web platform for critical material control and traceability
- Focused on expiration validation, location tracking, split handling, and compliance workflows
- Included delivery, return, discharge, reporting, and role-based access modules
- Built with Angular, ASP.NET Core, C#, SQL Server, Okta, APIs, and Power BI
- Designed to improve operational control, auditability, and material lifecycle visibility