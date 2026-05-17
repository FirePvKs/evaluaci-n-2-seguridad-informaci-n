## Acción Técnica: Inyección de metadatos maliciosos en encabezados X-Stat mediante un comando git push legítimo
Tipificación: Artículo 1° - Acceso ilícito

Texto legal aplicable: "El que, con ánimo de apoderarse, usar o conocer la información contenida en un sistema informático, acceda a él o a parte de él, sin autorización o excediendo la que posea..."

Análisis de subsumisión: El sujeto activo (atacante) posee una autorización limitada para interactuar con el sistema (permisos estándar de push en su propio repositorio). Sin embargo, al manipular los encabezados del servicio proxy interno babeld mediante la inyección de protocolos, el atacante excede la autorización que posee. El dolo se manifiesta en saltarse los mecanismos de autenticación y control perimetral para ingresar a la capa de servicios internos (gitrpcd), cumpliendo con el elemento subjetivo del tipo de querer conocer o usar información restringida del sistema informático.

## Acción Técnica: Alteración de la variable interna de entorno rails_env para evadir el entorno aislado (sandbox)
Tipificación: Artículo 3° - Ataque a la integridad de los datos informáticos

Texto legal aplicable: "El que, de manera indebida o sin autorización, altere, dañe, borre, deteriore o suprima datos informáticos..."

Análisis de subsumisión: La variable rails_env constituye lógicamente un "dato informático" (representación de información apta para el procesamiento en un sistema). Al forzar la conmutación de los modos de producción a entornos no restringidos, el atacante ejecuta de manera indebida el verbo rector alterar. Esta modificación no autorizada de los datos de configuración del framework altera el comportamiento lógico programado del software, desprotegiendo los límites de seguridad impuestos por el aislamiento (sandbox).

## Acción Técnica: Manipulación del parámetro custom_hooks_dir e inyección de secuencias de escape (path traversal) en repo_pre_receive_hooks para ejecutar código en el servidor
Tipificación: Artículo 4° - Ataque a la integridad del sistema informático

Texto legal aplicable: "El que, de manera indebida o sin autorización, obstaculice o interrumpa gravemente el funcionamiento total o parcial de un sistema informático, a través de la introducción, transmisión, daño, deterioro, alteración o supresión de datos informáticos..."

Análisis de subsumisión: La ejecución remota de código (RCE) a nivel de sistema operativo mediante el secuestro de los scripts de ejecución automática (hooks) implica la introducción y transmisión de datos informáticos maliciosos (payloads). Al tomar el control de los procesos del servidor subyacente, se vulnera gravemente la integridad del sistema. Aunque el software siga encendido, la alteración del flujo lógico para ejecutar procesos arbitrarios ajenos a la función del servidor constituye jurídicamente una obstaculización y un compromiso grave de su funcionamiento normal y seguro.

## Acción Técnica: Acceso indebido y extracción de repositorios privados y secretos de CI/CD de terceros en los nodos de almacenamiento compartidos (shared storage nodes)
Tipificación: Artículo 2° - Interceptación ilícita (en concurso con el Artículo 1°)

Texto legal aplicable: "El que, de manera indebida o sin autorización, intercepte, interrumpa o interfiera la transmisión no pública de datos informáticos entre sistemas informáticos, o dentro de un mismo sistema..."

Análisis de subsumisión: La arquitectura afectada corresponde a nodos compartidos multi-inquilino (multi-tenant). Al romper el aislamiento, el atacante captura el flujo de datos y el contenido de repositorios de otros usuarios que se procesan o almacenan dentro de un mismo sistema. Capturar o desviar de forma encubierta esta información confidencial sin consentimiento de los titulares constituye el verbo rector de interceptar datos informáticos en su fase de tránsito o procesamiento interno.