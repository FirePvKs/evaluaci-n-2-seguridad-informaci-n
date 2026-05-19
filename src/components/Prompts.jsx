const prompts = [
  {
    numero: '01',
    seccion: 'Resumen Ejecutivo',
    archivo: '01_resumen_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'haz un resumen ejecutivo de la ultima vulnerabilidad encontrada en github esto es para un trabajo de la universidad por lo que debe ser serio y con lenguaje técnico, no ocupes emojis y debe tener los siguientes criterios qué pasó, cuándo, quiénes participaron, impacto',
    acepto:
      'Se aceptó la estructura completa del resumen con los cuatro criterios solicitados y la línea de tiempo.',
    corrigio:
      'Se ajustó la terminología técnica para incluir los nombres exactos de los componentes (babeld, gitrpcd, X-Stat) que no aparecían en la respuesta inicial.',
  },
  {
    numero: '02',
    seccion: 'Marco Normativo',
    archivo: '02_marco_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'necesito que en base a esté caso apliques las leyes y regulaciones chilenas aplicables es importante que sean de chile y con bases de link para verificar las fuentes',
    acepto:
      'Se aceptaron las cuatro normativas identificadas (Ley 21.459, Ley 21.663, Ley 19.628, Decreto 295) con sus artículos específicos y los links de la BCN.',
    corrigio:
      'Se añadió la referencia al Decreto 295 como normativa complementaria, que no apareció en la respuesta inicial pero es fundamental para determinar el umbral de "efecto significativo".',
  },
  {
    numero: '03',
    seccion: 'Tipificación de Delitos',
    archivo: '03_delitos_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'Tipificación de delitos según la Ley 21.459, citando artículos y mapeando cada acción del atacante aplicalo al caso de la ultima vulnerabilidad de github',
    acepto:
      'Se aceptó el análisis de subsumisión de cada acción técnica con su correspondiente artículo.',
    corrigio:
      'Fue necesario un segundo prompt específico para que la tabla de mapeo se renderizara en formato Markdown compatible con archivos .md, ya que la respuesta inicial presentaba la tabla en texto plano no estructurado.',
  },
  {
    numero: '03b',
    seccion: 'Tabla de Delitos (formato MD)',
    archivo: '03_delitos_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'necesito que me hagas esté cuadro de mapeo técnico compatible con archivos md para que se vean correctamente [tabla con columnas: Acción del Atacante, Verbo Rector, Artículo, Calificación Penal]',
    acepto: 'Se aceptó la tabla en formato Markdown con las cuatro columnas y los cuatro delitos.',
    corrigio:
      'Se verificó que la sintaxis de la tabla fuera compatible con el renderizado en GitHub.',
  },
  {
    numero: '04',
    seccion: 'Comparación de Marcos',
    archivo: '04_comparacion_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'Tabla comparativa de marcos regulatorios por industria (mínimo 3 marcos y 3 ejes). para el caso de la vulnerabilidad de github ya mencionado',
    acepto: 'Se aceptaron los tres marcos (Ley 21.663, Ley 19.628, RAN-CMF) y los tres ejes de análisis.',
    corrigio:
      'Requirió un prompt adicional para convertir la tabla al formato Markdown correcto con las celdas de varias líneas correctamente escapadas.',
  },
  {
    numero: '05',
    seccion: 'Responsabilidades',
    archivo: '05_responsabilidades_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'Actores identificados y sus responsabilidades penales, civiles y administrativas, con cita de norma para el caso de la vulnerabilidad de github',
    acepto:
      'Se aceptaron los cuatro actores identificados y la distinción entre tipos de responsabilidad con sus citas normativas.',
    corrigio:
      'Se añadió el actor "Wiz Research" con su eximente de responsabilidad, que no aparecía en la respuesta inicial.',
  },
  {
    numero: '06',
    seccion: 'Datos Personales y ARCO',
    archivo: '06_datos_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'Tratamiento de datos según la Ley 19.628: tipos, distinción personales/sensibles y derechos ARCO aplicado al caso de la vulnerabilidad de github',
    acepto:
      'Se aceptó la distinción entre datos personales y sensibles con los ejemplos concretos del contexto de desarrollo de software.',
    corrigio:
      'Se enriqueció la sección de datos sensibles con ejemplos más específicos al contexto empresarial (registros biométricos, afiliaciones sindicales) que aplicaban directamente al escenario GHES.',
  },
  {
    numero: '07',
    seccion: 'Conclusiones',
    archivo: '07_conclusiones_urbvic.md',
    herramienta: 'Claude (claude.ai)',
    prompt:
      'Recomendaciones de seguridad y reflexión final del análisis aplicalo al caso de la vulnerabilidad de github',
    acepto:
      'Se aceptó el enfoque de "Defensa en Capas" y la reflexión final sobre la madurez del marco legal chileno.',
    corrigio:
      'Se ajustó la reflexión final para que mencionara explícitamente la Ley 21.663 y la responsabilidad activa de las organizaciones, no solo la penalización del atacante.',
  },
]

export default function Prompts() {
  return (
    <article className="prose-section">
      <h1 className="section-title">Bitácora de Uso de Inteligencia Artificial</h1>
      <p className="section-subtitle">Registro de prompts, correcciones y reflexión sobre el uso de IA</p>

      <div className="card mb-6">
        <h2 className="card-title">Resumen de Uso</h2>
        <div className="uso-stats">
          <div className="stat-box">
            <span className="stat-num">{prompts.length}</span>
            <span className="stat-label">Prompts utilizados</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">8</span>
            <span className="stat-label">Secciones asistidas</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">Claude</span>
            <span className="stat-label">Herramienta principal</span>
          </div>
        </div>
      </div>

      {prompts.map((p, i) => (
        <div key={i} className="card prompt-card">
          <div className="prompt-header">
            <span className="prompt-num">{p.numero}</span>
            <div>
              <h3 className="prompt-seccion">{p.seccion}</h3>
              <span className="prompt-archivo">{p.archivo}</span>
            </div>
            <span className="prompt-herramienta">{p.herramienta}</span>
          </div>

          <div className="prompt-block">
            <p className="prompt-label">💬 Prompt utilizado:</p>
            <blockquote className="prompt-text">{p.prompt}</blockquote>
          </div>

          <div className="prompt-result">
            <div className="result-acepto">
              <span className="result-icon">✅</span>
              <div>
                <p className="result-label">Qué se aceptó:</p>
                <p>{p.acepto}</p>
              </div>
            </div>
            <div className="result-corrigio">
              <span className="result-icon">✏️</span>
              <div>
                <p className="result-label">Qué se corrigió:</p>
                <p>{p.corrigio}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="card reflexion-ia">
        <h2 className="card-title">Reflexión Final sobre el Uso de IA</h2>
        <p>
          El uso de Claude como herramienta de asistencia resultó valioso principalmente en dos
          dimensiones: la <strong>estructuración del análisis legal</strong> (mapear acciones
          técnicas a artículos específicos de la Ley 21.459 requiere un nivel de especificidad que
          la IA manejó eficientemente) y la <strong>generación del formato Markdown</strong> para
          tablas comparativas complejas.
        </p>
        <p className="mt-3">
          Sin embargo, la herramienta requirió supervisión constante: en ningún caso se aceptó la
          respuesta sin verificación. Las correcciones más frecuentes involucaron agregar actores
          omitidos (Wiz Research), enriquecer ejemplos con contexto específico del caso, y reformular
          la reflexión final para que reflejara el estándar de diligencia activa que exige la
          legislación chilena de 2026.
        </p>
        <p className="mt-3">
          La calidad del análisis legal dependió en mayor medida de la investigación previa del caso
          y del conocimiento de las normativas que de la capacidad generativa de la IA. Esta fue
          una herramienta de productividad, no de sustitución del criterio jurídico-técnico del
          estudiante.
        </p>
      </div>
    </article>
  )
}
