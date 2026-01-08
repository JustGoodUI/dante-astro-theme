---
title: "Máquina Etiquetadora Inteligente 4.0"
description: "Automatización completa de una etiquetadora con control de movimiento (Servos), Visión Artificial (Cognex) e integración IoT con Node-RED."
publishDate: 2025-09-01
isFeatured: true
seo:
  image:
    src: "/assets/images/etiquetadora-preview.jpg"
---

![Project preview](/assets/images/etiquetadora-preview.jpg)

**Nota:** Este proyecto representa mi Trabajo de Final de Grado, desarrollado durante 4 meses, integrando tecnologías de control, visión y conectividad IoT.

**Resumen del Proyecto:** Diseño y programación integral de una máquina etiquetadora automática. El sistema coordina el control de movimiento de precisión, la validación de calidad mediante visión artificial y la comunicación entre múltiples CPUs y sistemas de gestión de datos.

---

## 🎯 Objetivos

1. **Sincronización de Control:** Comunicar 2 PLCs Siemens para gestionar la lógica de seguridad y proceso de forma distribuida.
2. **Precisión Milimétrica:** Implementar control de movimiento avanzado mediante **Servomotores** para el etiquetado exacto.
3. **Control de Calidad:** Integrar cámara **Cognex** para validación automática de etiquetas.
4. **Industria 4.0:** Digitalizar el proceso enviando datos de producción a través de **Node-RED**.

---

## ⚡ Características Principales

### 1. Arquitectura de Control Distribuida
El sistema no depende de un solo cerebro. Se implementó una comunicación robusta entre controladores y periferia:

| Componente | Función | Tecnología |
|------------|---------|------------|
| **PLC Maestro** | Lógica central y secuencias | Siemens S7-1200/1500 |
| **PLC Esclavo** | Gestión de subsistemas | Comunicación S7 / Profinet |
| **HMI** | Interfaz de operario | Omron NB Series |

### 2. Visión Artificial y Motion Control
La máquina no solo "mueve" cosas, sino que "ve" y "corrige":

* **Servomotor:** Configuración de perfiles de movimiento para asegurar que la etiqueta se aplica a la velocidad exacta de la cinta transportadora.
* **Cámara Cognex:** Inspección en tiempo real. Si la etiqueta está torcida o falta, el sistema lo detecta.

### 3. Conectividad IT/OT (Node-RED)
Salto del taller a la nube. El sistema expone datos para su visualización o almacenamiento externo.

> **Dato Clave:** La integración con Node-RED permite crear dashboards web accesibles desde móvil o enviar alertas por Telegram/Email en caso de fallo.

---

## 🛠️ Tech Stack

![Siemens](https://img.shields.io/badge/PLC-Siemens-009999?style=for-the-badge&logo=siemens&logoColor=white)
![TIA Portal](https://img.shields.io/badge/IDE-TIA_Portal-grey?style=for-the-badge)
![Omron](https://img.shields.io/badge/HMI-Omron_NB-blue?style=for-the-badge&logo=omron&logoColor=white)
![Cognex](https://img.shields.io/badge/Visión-Cognex-yellow?style=for-the-badge)
![Node-RED](https://img.shields.io/badge/IoT-Node--RED-8F0000?style=for-the-badge&logo=nodered&logoColor=white)

- **Lenguajes:** Ladder (LAD), SCL.
- **Hardware:** 2x PLCs Siemens, 1x Pantalla Omron, Servodrivers.
- **Software:** TIA Portal, NB Designer, Software de Cognex.
- **Protocolos:** S7 Communication, TCP/IP.

---

## 📊 Desafíos y Resultados

| Desafío | Solución Implementada | Resultado |
|---------|-----------------------|-----------|
| **Comunicación entre marcas** | Integración de HMI Omron con PLC Siemens | ✅ Visualización fluida y sin latencia |
| **Sincronización** | Configuración precisa del Servomotor | ✅ Etiquetado sin arrugas ni desviaciones |
| **Gestión de Datos** | Flujo de Node-RED personalizado | ✅ Dashboard en tiempo real disponible |
| **Tiempo de desarrollo** | Planificación estructurada (4 meses) | ✅ Proyecto funcional en plazo |

---

## 🖼️ Arquitectura del Sistema

```mermaid
graph TD
    A[PLC Siemens Maestro] <-->|Profinet/S7| B[PLC Siemens Esclavo]
    A -->|Pulsos/PTO| C[Servomotor Etiquetado]
    A <-->|I/O o Com| D[Cámara Cognex]
    A <-->|Ethernet| E[HMI Omron NB]
    A -->|TCP/IP| F[Node-RED]
    F --> G[Dashboard Web / BBDD]