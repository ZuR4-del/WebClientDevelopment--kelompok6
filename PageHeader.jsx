function PageHeader({ title, description, children }) {
  return (
    <section className="bg-cream pt-5">
      <div className="container pt-4">
        <div
          className="rounded-card position-relative overflow-hidden text-center px-4 py-5"
          style={{ backgroundColor: '#E7F0D8' }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(23,59,46,0.12) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
              opacity: 0.6,
            }}
          ></div>

          <div className="position-relative">
            <div
              className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-4"
              style={{ width: 64, height: 64, backgroundColor: 'var(--lime)' }}
            >
              <i className="bi bi-flower2 fs-3" style={{ color: 'var(--darker-green)' }}></i>
            </div>
            <h1 className="mb-3">{title}</h1>
            {description && (
              <p className="mx-auto mb-0" style={{ maxWidth: 640 }}>
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
