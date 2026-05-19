## El Atacante (Sujeto Activo)
Persona natural que, utilizando un cliente Git estándar, ejecuta el comando git push con parámetros manipulados para explotar la inyección en babeld.

Responsabilidad Penal:

Ley 21.459, Art. 1° (Acceso Ilícito): Pena de presidio menor en su grado mínimo por acceder o exceder la autorización en el sistema informático.

Ley 21.459, Art. 4° (Ataque a la integridad del sistema): Al ejecutar código arbitrario (RCE) y obstaculizar el funcionamiento normal del servidor. Penas de presidio menor en su grado medio a máximo.

Responsabilidad Civil:

Código Civil, Art. 2314: Obligación de indemnizar por el daño emergente y lucro cesante causado a la infraestructura y a los terceros cuyos datos fueron comprometidos (Responsabilidad Extracontractual).

## GitHub Inc. (Proveedor de Servicio)
Entidad responsable de la plataforma GitHub.com y del desarrollo del software GitHub Enterprise Server (GHES).

Responsabilidad Administrativa:

Ley 21.663, Art. 9° (Deber de Reporte): GitHub tiene la obligación de notificar a la Agencia Nacional de Ciberseguridad (ANCI) sobre incidentes con efectos significativos en el territorio nacional. El incumplimiento de los plazos (3 horas) puede acarrear multas de hasta 40.000 UTM.

Ley 21.663, Art. 4° (Seguridad por diseño): Responsabilidad por no haber sanitizado correctamente las entradas de usuario en protocolos internos, contraviniendo el principio de seguridad técnica exigido.

Responsabilidad Civil:

Ley 19.496 (Protección al Consumidor): Responsabilidad por falta de seguridad en el servicio prestado, lo que genera el deber de compensar a los clientes afectados por la vulneración de sus activos digitales.

## Empresas Chilenas Usuarias de GHES (Operadores de Importancia Vital)
Organizaciones en Chile que operan sus propias instancias de servidor y no han aplicado los parches liberados en marzo de 2026.

Responsabilidad Administrativa:

Ley 21.663, Art. 14° (Gestión de Riesgos): Los Operadores de Importancia Vital (OIV) tienen el deber legal de gestionar sus vulnerabilidades. Mantener instancias vulnerables (el 88% según el reporte de Wiz) constituye una infracción grave.

Sanción: Multas de hasta 10.000 UTM por negligencia en la actualización de infraestructura crítica una vez que el parche fue puesto a disposición.

Responsabilidad Civil:

Ley 19.628, Art. 11° (Protección de Datos): Responsabilidad por no adoptar medidas de cuidado y diligencia en el tratamiento de datos de sus empleados o clientes almacenados en dichos servidores.

## Wiz Research (Investigadores de Seguridad)
Actor que identificó la vulnerabilidad y la reportó a través del programa de Bug Bounty.

Eximente de Responsabilidad:

Ley 21.459, Art. 1° (Divulgación Responsable): Al actuar bajo un programa de recompensas y reportar de manera ética, su conducta no es punible ya que cuenta con la autorización del titular para realizar pruebas de penetración, excluyendo el dolo de acceso ilícito.