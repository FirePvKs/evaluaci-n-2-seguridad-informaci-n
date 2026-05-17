# Vulnerabilidad de Ejecución Remota de Código en GitHub (CVE-2026-3854)
## Qué Pasó (Descripción Técnica)
Se identificó una vulnerabilidad crítica de Ejecución Remota de Código (RCE) en la infraestructura interna de Git de GitHub, específicamente dentro de su proxy de Git denominado babeld y el componente gitrpcd. El fallo, registrado bajo el identificador CVE-2026-3854, consiste en un defecto de inyección de protocolos internos.

El vector de ataque permitía a cualquier usuario autenticado con permisos de escritura (push) en cualquier repositorio (incluyendo uno propio creado con fines maliciosos) inyectar metadatos manipulados en los encabezados del servicio interno X-Stat a través de un comando estándar git push. La explotación exitosa requería una cadena de tres pasos fundamentales:  

Evasión del entorno aislado (sandbox): Alteración de la variable rails_env para conmutar las rutas de producción a entornos no restringidos.

Redirección del directorio de hooks: Manipulación del parámetro custom_hooks_dir para controlar la base de búsqueda de los scripts de ejecución automática.

Inyección de scripts con salto de directorio (path traversal): Inclusión de secuencias de escape en repo_pre_receive_hooks para forzar al sistema binario a ejecutar comandos arbitrarios en el servidor subyacente.

## Cuándo (Línea de Tiempo del Incidente)
El ciclo de vida de la vulnerabilidad se desarrolló durante el primer cuatrimestre del año 2026 bajo el siguiente esquema cronológico:

4 de marzo de 2026: El equipo de investigación externa detectó el fallo e informó de inmediato a GitHub a través de su programa de divulgación responsable. Ese mismo día, GitHub desplegó una mitigación de emergencia en la plataforma global GitHub.com.  

10 de marzo de 2026: Se asignó formalmente el identificador CVE-2026-3854 con una métrica de severidad CVSS v4.0 de 8.7 (Alta/Crítica). Paralelamente, se liberaron los parches correctivos para las versiones afectadas de GitHub Enterprise Server (GHES).

28 de abril de 2026: Tras cumplirse los plazos de seguridad reglamentarios para que las organizaciones actualizaran sus entornos locales, se procedió a la divulgación pública y técnica del fallo.

## Quiénes Participaron (Actores Involucrados)
El incidente involucró de manera directa a los siguientes actores del sector de la ciberseguridad:

Wiz Research: División de investigación de la firma de seguridad en la nube Wiz, responsable del descubrimiento y análisis del fallo. El hallazgo destaca técnicamente por haber sido alcanzado mediante herramientas de ingeniería inversa potenciadas por Inteligencia Artificial para el análisis de binarios cerrados.

GitHub Inc. (subsidiaria de Microsoft): Entidad encargada de recibir el reporte, validar el riesgo y desarrollar los parches de seguridad para corregir la vulnerabilidad en su infraestructura interna y en sus productos comerciales.

Organizaciones Afectadas: Administradores de TI y empresas globales que operan instancias locales de GitHub Enterprise Server y que requirieron la aplicación inmediata de parches de remediación.

## Impacto (Alcance y Consecuencias)
Las implicaciones del fallo CVE-2026-3854 se diferencian según la arquitectura de despliegue de la plataforma:

En GitHub.com (Entorno Cloud Compartido)
El RCE afectó directamente a los nodos de almacenamiento compartidos (shared storage nodes). Un atacante podría haber comprometido estos nodos y accedido de manera no autorizada a millones de repositorios públicos y privados pertenecientes a otras organizaciones alojadas en la misma infraestructura.

En GitHub Enterprise Server (GHES - Entornos On-Premise)
El impacto en los servidores locales fue total. La explotación del fallo otorgaba acceso directo al sistema operativo subyacente, lo que permitía a un atacante comprometer la totalidad del servidor sin necesidad de escalamiento de privilegios previo. Esto expuso el código fuente propietario, las credenciales de acceso integradas y los secretos de CI/CD almacenados en entornos empresariales aislados.