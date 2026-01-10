---
title: Projecto Maquina Etiquetadora
description: Projecto Maquina Etiquetadora.
publishDate: 2026-01-07
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-2.jpg'
---

![Project preview](../../assets/images/project-2.jpg)

# 📦 Sistema de Etiquetado Automático 4 Caras
> **Proyecto de Automatización Industrial, Robótica y Visión Artificial.**

Este proyecto documenta el diseño e implementación de una estación de trabajo automatizada para el etiquetado secuencial de cajas en sus cuatro caras, integrando control de movimiento de alta precisión y verificación de calidad mediante visión artificial.

---

## 🚀 Vista General del Proyecto
El sistema soluciona la necesidad de trazabilidad total en líneas de producción, asegurando que cada producto sea etiquetado correctamente y que la información (QR/Datos) sea legible antes de salir de la estación.

### **Puntos Clave:**
* **Precisión:** Uso de servomotores para el posicionamiento exacto de la carga.
* **Fiabilidad:** Verificación en tiempo real con cámaras Cognex.
* **Estándar Industrial:** Programación basada en la Guía GEMMA.

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
| :--- | :--- |
| **Control (PLC)** | 2x Siemens SIMATIC S7-1200 (Arquitectura Maestro-Esclavo) |
| **HMI** | Siemens KTP700 Basic |
| **Motion Control** | Servomotor Panasonic MINAS LIQI (Control por PTO) |
| **Visión Artificial** | Cámara Cognex In-Sight 8000 |
| **Comunicaciones** | Profinet, TCP/IP, FTP e integración con Software Maewin |
| **Impresión** | Zebra ZE500 (Motor de impresión industrial) |
| **Neumática** | Sistemas de vacío y soplado para transferencia de etiquetas |

---

## ⚙️ Ingeniería y Desarrollo

### 1. Arquitectura de Control
Se ha implementado una red **Profinet** robusta que comunica todos los dispositivos. El software se desarrolló en **TIA Portal V17**, utilizando una mezcla de:
* **Lógica en KOP:** Para la secuenciación principal.
* **Programación en SCL:** Para la gestión de datos y cálculos complejos.

### 2. Gestión de Estados (Guía GEMMA)
Para garantizar la seguridad y operatividad profesional, el sistema gestiona:
* **Modos de Marcha:** Producción normal, preparación (F2) y parada en estado inicial (A1).
* **Gestión de Defectos:** Reintento automático de impresión en caso de lectura fallida de QR.
* **Seguridad:** Paradas de emergencia integradas y rearme seguro.

### 3. Sistema de Verificación (QA)
La cámara Cognex actúa como el "juez" del proceso. Si el QR no cumple los estándares de calidad o es ilegible, el PLC detiene el ciclo de avance y solicita una nueva etiqueta, garantizando **cero errores** en la salida.

---

## 📂 Documentación del Proyecto
El proyecto cuenta con manuales técnicos detallados que cubren todo el ciclo de vida de la máquina:

* **Manual de Usuario:** Procedimientos de operación, riesgos laborales y seguridad.
* **Manual de Funcionamiento:** Detalles de la lógica de programación y estados del sistema.
* **Manual de Comunicación:** Configuración de direcciones IP y protocolos de intercambio de datos.

---

## 👨‍💻 Sobre el Autor
**Daniel Pastor Redondo** *Técnico en Automatización y Robótica Industrial* Especializado en la integración de sistemas Siemens, visión artificial y control de movimiento.

---

> **¿Te interesa saber más sobre este proyecto?** > Puedes contactarme a través de mi [perfil de LinkedIn](https://www.linkedin.com/in/daniel-pastor-redondo-49794a331/) o revisar el código fuente en este repositorio.