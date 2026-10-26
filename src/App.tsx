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
  return (
    <BrowserRouter>
      <div className="app-shell">
        <aside className="sidebar">
          <NavLink className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span className="brand-name">CuraDock</span>
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
