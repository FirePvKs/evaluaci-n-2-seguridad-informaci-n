const actores = [
  {
    nombre: 'El Atacante (Sujeto Activo)',
    icon: '🦹',
    color: 'actor-red',
    descripcion:
      'Persona natural que, utilizando un cliente Git estándar, ejecuta el comando git push con parámetros manipulados para explotar la inyección en babeld.',
    responsabilidades: [
      {
        tipo: 'Penal',
        icon: '⚖',
        items: [
          {
            norma: 'Ley 21.459, Art. 1°',
            label: 'Acceso Ilícito',
            detalle:
              'Pena de presidio menor en su grado mínimo por acceder o exceder la autorización en el sistema informático.',
          },
          {
            norma: 'Ley 21.459, Art. 4°',
            label: 'Ataque a la integridad del sistema',
            detalle:
              'Al ejecutar código arbitrario (RCE) y obstaculizar el funcionamiento normal del servidor. Penas de presidio menor en su grado medio a máximo.',
          },
        ],
      },
      {
        tipo: 'Civil',
        icon: '💼',
        items: [
          {
            norma: 'Código Civil, Art. 2314',
            label: 'Indemnización extracontractual',
            detalle:
              'Obligación de indemnizar por el daño emergente y lucro cesante causado a la infraestructura y a los terceros cuyos datos fueron comprometidos.',
          },
        ],
      },
    ],
  },
  {
    nombre: 'GitHub Inc. (Proveedor de Servicio)',
    icon: '🏢',
    color: 'actor-orange',
    descripcion:
      'Entidad responsable de la plataforma GitHub.com y del desarrollo del software GitHub Enterprise Server (GHES).',
    responsabilidades: [
      {
        tipo: 'Administrativa',
        icon: '📋',
        items: [
          {
            norma: 'Ley 21.663, Art. 9°',
            label: 'Deber de Reporte',
            detalle:
              'GitHub tiene la obligación de notificar a la ANCI sobre incidentes con efectos significativos en territorio nacional. Incumplimiento puede acarrear multas de hasta 40.000 UTM.',
          },
          {
            norma: 'Ley 21.663, Art. 4°',
            label: 'Seguridad por diseño',
            detalle:
              'Responsabilidad por no haber sanitizado correctamente las entradas de usuario en protocolos internos, contraviniendo el principio de seguridad técnica exigido.',
          },
        ],
      },
      {
        tipo: 'Civil',
        icon: '💼',
        items: [
          {
            norma: 'Ley 19.496',
            label: 'Protección al Consumidor',
            detalle:
              'Responsabilidad por falta de seguridad en el servicio prestado, lo que genera el deber de compensar a los clientes afectados por la vulneración de sus activos digitales.',
          },
        ],
      },
    ],
  },
  {
    nombre: 'Empresas Chilenas Usuarias de GHES',
    icon: '🏗',
    color: 'actor-blue',
    descripcion:
      'Organizaciones en Chile que operan sus propias instancias de servidor y no han aplicado los parches liberados en marzo de 2026. Calificados como Operadores de Importancia Vital (OIV).',
    responsabilidades: [
      {
        tipo: 'Administrativa',
        icon: '📋',
        items: [
          {
            norma: 'Ley 21.663, Art. 14°',
            label: 'Gestión de Riesgos',
            detalle:
              'Los OIV tienen el deber legal de gestionar sus vulnerabilidades. Mantener instancias vulnerables (el 88% según el reporte de Wiz) constituye una infracción grave. Multas de hasta 10.000 UTM.',
          },
        ],
      },
      {
        tipo: 'Civil',
        icon: '💼',
        items: [
          {
            norma: 'Ley 19.628, Art. 11°',
            label: 'Protección de Datos',
            detalle:
              'Responsabilidad por no adoptar medidas de cuidado y diligencia en el tratamiento de datos de sus empleados o clientes almacenados en dichos servidores.',
          },
        ],
      },
    ],
  },
  {
    nombre: 'Wiz Research (Investigadores de Seguridad)',
    icon: '🔬',
    color: 'actor-green',
    descripcion:
      'Actor que identificó la vulnerabilidad y la reportó a través del programa de Bug Bounty de GitHub.',
    responsabilidades: [
      {
        tipo: 'Eximente de Responsabilidad',
        icon: '✅',
        items: [
          {
            norma: 'Ley 21.459, Art. 1°',
            label: 'Divulgación Responsable',
            detalle:
              'Al actuar bajo un programa de recompensas y reportar de manera ética, su conducta no es punible ya que cuenta con la autorización del titular para realizar pruebas de penetración, excluyendo el dolo de acceso ilícito.',
          },
        ],
      },
    ],
  },
]

export default function Responsabilidades() {
  return (
    <article className="prose-section">
      <h1 className="section-title">Responsabilidades Legales de los Actores</h1>
      <p className="section-subtitle">
        Análisis de responsabilidades penales, civiles y administrativas con cita de norma
      </p>

      {actores.map((actor, i) => (
        <div key={i} className={`card actor-section ${actor.color}-border`}>
          <div className="actor-heading">
            <span className="actor-emoji">{actor.icon}</span>
            <div>
              <h2 className="card-title">{actor.nombre}</h2>
              <p className="actor-desc">{actor.descripcion}</p>
            </div>
          </div>

          <div className="resp-grid">
            {actor.responsabilidades.map((resp, j) => (
              <div key={j} className="resp-block">
                <div className="resp-header">
                  <span>{resp.icon}</span>
                  <span className="resp-tipo">Responsabilidad {resp.tipo}</span>
                </div>
                {resp.items.map((item, k) => (
                  <div key={k} className="resp-item">
                    <span className="resp-norma">{item.norma}</span>
                    <strong className="resp-label">{item.label}</strong>
                    <p className="resp-detalle">{item.detalle}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
  )
}
