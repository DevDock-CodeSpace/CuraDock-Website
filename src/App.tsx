import { useState } from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Billing from './pages/Billing'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import Scanning from './pages/Scanning'
import Settings from './pages/Settings'
import './App.css'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Inventory', path: '/inventory' },
  { name: 'Billing', path: '/billing' },
  { name: 'Scanning', path: '/scanning' },
  { name: 'Settings', path: '/settings' },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  return (
    <BrowserRouter>
      <div className="app-shell" data-theme={theme}>
        <aside className="sidebar">
          <NavLink className="brand" to="/">
            {theme === 'dark' ? (
              <>
                <img alt="" className="brand-symbol" src="/cura-dock-icon-dark.svg" />
                <img alt="CuraDock" className="brand-wordmark" src="/cura-dock-wordmark-white.svg" />
              </>
            ) : (
              <>
                <img alt="" className="brand-symbol" src="/cura-dock-icon-light.svg" />
                <img alt="CuraDock" className="brand-wordmark" src="/cura-dock-wordmark.svg" />
              </>
            )}
          </NavLink>

          <nav className="navigation" aria-label="Main navigation">
            {pages.map(({ name, path }) => (
              <NavLink
                className={({ isActive }) => `navigation-link${isActive ? ' active' : ''}`}
                end={path === '/'}
                key={name}
                to={path}
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </aside>

        <button
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          type="button"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            {theme === 'dark' ? (
              <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
            ) : (
              <path d="M20.1 15.2A8.5 8.5 0 0 1 8.8 3.9 8.5 8.5 0 1 0 20.1 15.2Z" />
            )}
          </svg>
          <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        </button>

        <main className="main-content">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Inventory />} path="/inventory" />
            <Route element={<Billing />} path="/billing" />
            <Route element={<Scanning />} path="/scanning" />
            <Route element={<Settings />} path="/settings" />
            <Route element={<Navigate replace to="/" />} path="*" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
