---
title: CryptoTrader - Cryptocurrency Portfolio Manager
description: CryptoTrader Dashboard is a comprehensive web application designed to empower cryptocurrency enthusiasts with tools to manage and optimize their digital asset portfolios.
publishDate: 'Jan 10 2024'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-7.jpg'
---

![Project preview](../../assets/images/project-7.jpg)

# Sistema de Etiquetado Automático 4 Caras con Verificación por Visión Artificial

## 📋 Descripción del Proyecto
Este proyecto consiste en el diseño, programación e implementación de una estación automatizada industrial capaz de aplicar etiquetas en las **cuatro caras de una caja** de forma secuencial. El sistema integra un control preciso de movimiento mediante servomotor y un sistema de verificación de calidad basado en **visión artificial** para garantizar la correcta trazabilidad del producto.

### 🎯 Objetivos Logrados
* **Automatización Integral:** Ciclo completo de etiquetado sin intervención humana.
* [cite_start]**Control de Calidad en Tiempo Real:** Verificación de códigos QR mediante cámara Cognex; en caso de error, el sistema gestiona la reimpresión automática[cite: 23, 577].
* [cite_start]**Sincronización Multieje:** Coordinación entre el brazo aplicador neumático y el giro de 90° de la caja mediante servocontrol[cite: 24, 633].

---

## 🛠️ Tecnologías y Hardware Utilizado

### Control y Comunicación
* [cite_start]**PLCs:** 2x Siemens SIMATIC S7-1200 (Configuración Maestro-Esclavo vía **PROFINET**)[cite: 27, 28].
* [cite_start]**HMI:** Siemens KTP700 Basic para el control y monitorización del operador[cite: 818].
* [cite_start]**Software:** TIA Portal V17 (Programación en **KOP** y **SCL**)[cite: 427, 430].

### Accionamientos y Sensores
* [cite_start]**Motion Control:** Servomotor Panasonic MINAS LIQI con tecnología de tren de pulsos (PTO)[cite: 401, 408].
* [cite_start]**Visión Artificial:** Cámara Cognex IN8000 para lectura y validación de datos[cite: 566, 612].
* [cite_start]**Neumática:** Sistema de vacío y soplado para transferencia de etiquetas, controlado por electroválvulas[cite: 598, 607].
* [cite_start]**Impresión:** Impresora industrial Zebra ZE500[cite: 818].

---

## ⚙️ Arquitectura de Software
El desarrollo se basó en metodologías robustas para asegurar la escalabilidad y facilidad de mantenimiento:

1.  [cite_start]**Guía GEMMA:** Implementación de estados operativos (Producción, Paradas de Emergencia, Preparación posterior a defecto y Verificación manual) para un control seguro de la máquina[cite: 410, 421].
2.  [cite_start]**Gestión de Datos:** Comunicación con software *Maewin* para la carga de datos en el buffer de la impresora antes del inicio de producción[cite: 567].
3.  [cite_start]**Lógica de Reintento:** Si la cámara detecta una lectura fallida, el sistema activa un bucle de reimpresión del mismo código hasta que la validación sea positiva, evitando descartes innecesarios[cite: 577].

---

## 📈 Desempeño y Mantenimiento
Para garantizar la fiabilidad a largo plazo, la documentación incluye:
* [cite_start]**Protocolos de Mantenimiento:** Tareas preventivas semanales y mensuales (limpieza de sensores de fibra óptica, filtros de aire y revisión de presión neumática a 6 bar)[cite: 434, 435].
* [cite_start]**Diagnóstico de Fallos:** Guía detallada para la resolución de problemas comunes como pérdida de vacío o errores de comunicación[cite: 446].

---

## 👤 Autor
**Daniel Pastor Redondo**
*Proyecto Final - Ciclo Formativo de Grado Superior en Automatización y Robótica Industrial*
*Institut Palau Ausit, Ripollet.*