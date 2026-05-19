## Tipos de Datos y Distinción Legal
La legislación chilena clasifica los datos en categorías estrictas para determinar la intensidad de su protección y los requisitos de su tratamiento.

A. Datos Personales (o de Carácter Personal)
Definición Legal (Art. 2° letra f): Son los relativos a cualquier información concerniente a personas naturales, identificadas o identificables.

En el contexto del desarrollo de software: Corresponden a datos como el nombre del desarrollador, su nombre de usuario (username), la dirección de correo electrónico institucional o personal asociada a los commits de Git, y las direcciones IP de conexión a los repositorios.

Requisito de Tratamiento: Por regla general, su tratamiento requiere la autorización del titular por escrito o por un medio que garantice su autenticidad, salvo que provengan de fuentes accesibles al público o sean necesarios para la gestión económica o financiera de la entidad.

B. Datos Sensibles
Definición Legal (Art. 2° letra g): Aquellos datos personales que se refieren a las características físicas o morales de las personas o a hechos o circunstancias de su vida privada o intimidad, tales como los hábitos personales, el origen racial, las ideologías y opiniones políticas, las creencias o convicciones religiosas, los estados de salud físicos o psíquicos y la vida sexual.  

En el contexto del desarrollo de software: Aunque los repositorios de código contienen principalmente lógica técnica, el CVE-2026-3854 permitió el acceso a repositorios privados donde las organizaciones podrían haber estado almacenando bases de datos de prueba o archivos de configuración con datos médicos, afiliaciones sindicales de trabajadores o registros biométricos de acceso.

Requisito de Tratamiento (Estricto): Su tratamiento está prohibido, a menos que medie una autorización legal explícita, el consentimiento inequívoco y expreso del titular, o sean datos necesarios para la determinación u obtención de beneficios de salud.

## Los Derechos ARCO
Constituyen el núcleo de las facultades que la ley otorga a los ciudadanos para mantener el control sobre sus datos personales frente a cualquier organización pública o privada que actúe como responsable de la base de datos.

A. Acceso
Concepto: El derecho del titular a solicitar y obtener confirmación de si sus datos están siendo tratados, en qué forma, el origen de los mismos, la finalidad del almacenamiento y los destinatarios a quienes se comunican.

Aplicación: Un desarrollador o cliente puede exigir a la organización que declare exactamente qué datos suyos estaban almacenados en los servidores de GitHub afectados por la vulnerabilidad.

B. Rectificación
Concepto: El derecho a solicitar la modificación, actualización o corrección de aquellos datos personales que sean inexactos, erróneos, incompletos o desactualizados.

C. Cancelación (o Eliminación)
Concepto: El derecho a exigir la supresión de los datos personales cuando su almacenamiento carezca de fundamento legal, cuando la autorización del titular haya expirado o revocado, o cuando los datos estén caducos.

Aplicación: Si los datos de producción de un cliente fueron copiados en un entorno de pruebas (sandbox) de GitHub sin su consentimiento explícito, el titular puede exigir la inmediata eliminación regulatoria de esos registros.

D. Oposición
Concepto: La facultad del titular para negarse a que sus datos personales sean objeto de un tratamiento específico o que se utilicen para fines determinados (como la cesión a terceros o fines comerciales), aun cuando el tratamiento sea lícito.