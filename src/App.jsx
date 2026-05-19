import { useState } from 'react'
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
  { id: 'resumen',           label: '01 Resumen',          componente: <Resumen /> },
  { id: 'marco',             label: '02 Marco Normativo',  componente: <Marco /> },
  { id: 'delitos',           label: '03 Delitos',          componente: <Delitos /> },
  { id: 'comparacion',       label: '04 Comparacion',      componente: <Comparacion /> },
  { id: 'responsabilidades', label: '05 Responsabilidades',componente: <Responsabilidades /> },
  { id: 'datos',             label: '06 Datos Personales', componente: <Datos /> },
  { id: 'conclusiones',      label: '07 Conclusiones',     componente: <Conclusiones /> },
  { id: 'prompts',           label: '08 Bitacora IA',      componente: <Prompts /> },
]

export default function App() {
  const [activa, setActiva] = useState('resumen')
  const [menuOpen, setMenuOpen] = useState(false)

  const indice = secciones.findIndex(s => s.id === activa)
  const seccion = secciones[indice]

  const irA = (id) => {
    setActiva(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="topnav">
        <div className="topnav-inner">
          <span className="topnav-brand">
            <span className="brand-badge">TI3034</span>
            CVE-2026-3854
          </span>

          {/* Desktop buttons */}
          <nav className="topnav-links">
            {secciones.map(s => (
              <button
                key={s.id}
                onClick={() => irA(s.id)}
                className={'topnav-btn' + (activa === s.id ? ' topnav-btn-active' : '')}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="hamburger" />
            <span className="hamburger" />
            <span className="hamburger" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mobile-menu">
            {secciones.map(s => (
              <button
                key={s.id}
                onClick={() => irA(s.id)}
                className={'mobile-nav-item' + (activa === s.id ? ' topnav-btn-active' : '')}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="main-content">
        <div className="content-area">
          {seccion.componente}

          <div className="nav-footer">
            {indice > 0 && (
              <button className="nav-arrow nav-prev" onClick={() => irA(secciones[indice - 1].id)}>
                {secciones[indice - 1].label}
              </button>
            )}
            {indice < secciones.length - 1 && (
              <button className="nav-arrow nav-next" onClick={() => irA(secciones[indice + 1].id)}>
                {secciones[indice + 1].label}
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
