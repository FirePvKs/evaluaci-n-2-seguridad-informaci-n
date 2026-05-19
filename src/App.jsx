import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'
import './App.css'

const secciones = [
  { id: 'resumen',          label: '01 Resumen' },
  { id: 'marco',            label: '02 Marco' },
  { id: 'delitos',          label: '03 Delitos' },
  { id: 'comparacion',      label: '04 Comparación' },
  { id: 'responsabilidades',label: '05 Responsabilidades' },
  { id: 'datos',            label: '06 Datos' },
  { id: 'conclusiones',     label: '07 Conclusiones' },
  { id: 'prompts',          label: '08 Bitácora IA' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  return (
    <div className="app-shell">
      {/* Sticky top nav */}
      <header className="topnav">
        <div className="topnav-inner">
          <span className="topnav-brand">
            <span className="brand-badge">TI3034</span>
            CVE-2026-3854 · GitHub RCE
          </span>
          <nav className="topnav-links">
            {secciones.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="topnav-btn">
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="page-hero">
        <div className="hero-badge">TI3034 — Fundamentos de Seguridad de la Información</div>
        <h1 className="hero-title">Vulnerabilidad CVE-2026-3854</h1>
        <p className="hero-sub">Análisis Legal · GitHub Remote Code Execution · INACAP Valparaíso · Otoño 2026</p>
        <p className="hero-sub">Vicente Paolo Thomás Urbina Riquelme</p>
        <div className="hero-chips">
          <span className="chip">Ley 21.459</span>
          <span className="chip">Ley 21.663</span>
          <span className="chip">Ley 19.628</span>
          <span className="chip">CVSS 8.7 Alta/Crítica</span>
        </div>
      </div>

      {/* All sections stacked */}
      <main className="main-content">
        <section id="resumen"           className="page-section"><Resumen /></section>
        <section id="marco"             className="page-section"><Marco /></section>
        <section id="delitos"           className="page-section"><Delitos /></section>
        <section id="comparacion"       className="page-section"><Comparacion /></section>
        <section id="responsabilidades" className="page-section"><Responsabilidades /></section>
        <section id="datos"             className="page-section"><Datos /></section>
        <section id="conclusiones"      className="page-section"><Conclusiones /></section>
        <section id="prompts"           className="page-section"><Prompts /></section>
      </main>

      <footer className="page-footer">
        <p>TI3034 · INACAP Valparaíso · Otoño 2026 · Caso CVE-2026-3854</p>
      </footer>
    </div>
  )
}
