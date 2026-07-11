import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Process', to: '/process' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <footer style={{ backgroundColor: 'var(--dark-green)' }} className="text-white pt-5">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3 pb-4 border-bottom border-secondary-subtle">
          <Link to="/" className="d-flex align-items-center gap-2 fw-bold text-white fs-5">
            <i className="bi bi-flower2" style={{ color: 'var(--lime)' }}></i>
            DIETARY
          </Link>

          <ul className="nav gap-3">
            {links.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="nav-link px-0 text-white-50">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-lime rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 44, height: 44 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Kembali ke atas"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center py-3 gap-2 small text-white-50">
          <div className="d-flex gap-4 flex-wrap justify-content-center">
            <span><i className="bi bi-envelope me-2"></i>helloworld@yahoo.com</span>
            <span><i className="bi bi-telephone me-2"></i>+62 1234 5678</span>
            <span><i className="bi bi-geo-alt me-2"></i>Jakarta, Indonesia</span>
          </div>
          <span>© {year} Dietary. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
