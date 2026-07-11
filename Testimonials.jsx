import { useState } from 'react'

const testimonials = [
  {
    name: 'Jennifer Anderson',
    color: '#E8607A',
    quote:
      "I can't thank Dietary enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
  },
  {
    name: 'Robert Johnson',
    color: '#8A5A3B',
    quote:
      'Dietary has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
  },
  {
    name: 'Emily Davis',
    color: '#4A7A9B',
    quote:
      "I had struggled with my weight for years until I found Dietary. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Testimonials</h2>
          <p className="mx-auto" style={{ maxWidth: 560 }}>
            Our satisfied clients share their success stories and experiences on their journey to
            better health and well-being.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-4" key={t.name}>
              <div
                className={`p-4 rounded-card h-100 ${active === i ? 'border' : ''}`}
                style={{
                  backgroundColor: 'var(--card-mint)',
                  borderColor: active === i ? 'var(--lime-dark)' : 'transparent',
                }}
              >
                <i className="bi bi-quote fs-1 d-block mb-2" style={{ color: 'var(--lime-dark)' }}></i>
                <p className="small mb-4">{t.quote}</p>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                    style={{ width: 40, height: 40, backgroundColor: t.color, fontSize: '0.9rem' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <span className="fw-semibold">{t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
          <button
            className="btn btn-sm btn-outline-secondary rounded-circle"
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            aria-label="Sebelumnya"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setActive(i)}
              role="button"
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: active === i ? 'var(--dark-green)' : '#CBD8C2',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            ></span>
          ))}
          <button
            className="btn btn-sm btn-outline-secondary rounded-circle"
            onClick={() => setActive((active + 1) % testimonials.length)}
            aria-label="Selanjutnya"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
