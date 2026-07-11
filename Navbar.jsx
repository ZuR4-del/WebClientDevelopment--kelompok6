import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Process', to: '/process' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Blog', to: '/blog' },
  ]

  return (
    <header>
      <div
        className="text-center py-2 small"
        style={{ backgroundColor: 'var(--darker-green)', color: '#DDEBD0' }}
      >
        <i className="bi bi-megaphone-fill me-2"></i>
        Join Our Personalized Nutrition Demo For Free
        <i className="bi bi-arrow-right ms-2"></i>
      </div>

      <nav
        className="navbar navbar-expand-lg py-3"
        style={{ backgroundColor: 'var(--dark-green)' }}
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold" style={{ color: 'var(--lime)' }}>
            <i className="bi bi-flower2 fs-4"></i>
            <span style={{ color: '#fff' }}>DIETARY</span>
          </NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white fs-2"></i>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto gap-lg-4 text-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 'nav-link fw-medium' + (isActive ? ' active-link' : '')}
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--lime)' : '#EAF1DD',
                    })}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="btn btn-lime d-none d-lg-inline-block">
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
