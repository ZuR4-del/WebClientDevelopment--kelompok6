import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section id="home" className="bg-cream py-5">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 order-lg-1 order-2">
            <div
              className="rounded-card d-flex align-items-end justify-content-center overflow-hidden"
              style={{
                backgroundColor: '#DCE9C6',
                minHeight: '380px',
              }}
            >
              {/* Ganti src di bawah dengan hasil export ilustrasi dari Figma
                  (mis. assets/hero-illustration.png) agar 1:1 dengan desain */}
              <img
                src="/src/assets/hero-illustration.png"
                alt="Ilustrasi orang mengatur nutrisi lewat aplikasi"
                className="img-fluid"
                style={{ maxHeight: '380px', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="w-100 h-100 align-items-center justify-content-center flex-column"
                style={{ display: 'none', minHeight: '380px' }}
              >
                <i className="bi bi-person-hearts" style={{ fontSize: '5rem', color: 'var(--dark-green)' }}></i>
                <p className="mb-0 text-center px-4" style={{ color: 'var(--dark-green)' }}>
                  Taruh file <code>hero-illustration.png</code> hasil export Figma di <code>src/assets/</code>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 order-lg-2 order-1">
            <p className="section-eyebrow d-flex align-items-center gap-2 mb-2">
              Transform Your <span style={{ color: 'var(--heart-pink)' }}>❤️</span> Health with
            </p>
            <h1 className="display-5 mb-3">Personalized Nutrition Coaching</h1>
            <p className="mb-4">
              Welcome to Dietary, your trusted partner in achieving optimal health through
              personalized nutrition coaching. Our certified experts are here to guide you along
              your weight loss journey, delivering customized plans and continuous support. Start
              your transformation today and experience the incredible power of tailored nutrition
              coaching.
            </p>

            <div className="d-flex gap-3 flex-wrap mb-4">
              <Link to="/pricing" className="btn btn-lime">Get Starter Today</Link>
              <Link to="/contact" className="btn btn-outline-dark-green">Book a Demo</Link>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="d-flex">
                {['A', 'B', 'C'].map((seed, i) => (
                  <div
                    key={seed}
                    className="rounded-circle border border-3 border-white d-flex align-items-center justify-content-center fw-bold text-white"
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: i === 0 ? 0 : -14,
                      backgroundColor: ['#E8607A', '#5B8C5A', '#4A7A9B'][i],
                      fontSize: '0.85rem',
                    }}
                  >
                    {seed}
                  </div>
                ))}
              </div>
              <span className="fw-semibold" style={{ color: 'var(--text-dark)' }}>
                430+ Happy Customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
