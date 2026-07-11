import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const contactInfo = [
  { icon: 'bi-envelope-fill', label: 'support@dietary.com' },
  { icon: 'bi-telephone-fill', label: '+62 1234 5678' },
  { icon: 'bi-geo-alt-fill', label: 'Jakarta, Indonesia' },
]

const MAX_MESSAGE_LENGTH = 250

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    const value = e.target.value
    if (field === 'message' && value.length > MAX_MESSAGE_LENGTH) return
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Integrasi pengiriman (mis. ke email service/backend) bisa ditambahkan di sini.
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We value your feedback, questions, and concerns at Dietary. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods."
      />

      <section style={{ backgroundColor: 'var(--darker-green)' }} className="py-4">
        <div className="container">
          <div className="row g-3">
            {contactInfo.map((info) => (
              <div className="col-md-4" key={info.label}>
                <div
                  className="d-flex flex-column align-items-center gap-2 p-4 rounded-card text-white"
                  style={{ backgroundColor: 'var(--dark-green)' }}
                >
                  <i className={`bi ${info.icon} fs-4`} style={{ color: 'var(--lime)' }}></i>
                  <span>{info.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-cream">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label small fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Name"
                      style={{ backgroundColor: 'var(--card-mint)', border: 'none' }}
                      value={form.name}
                      onChange={handleChange('name')}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your Email"
                      style={{ backgroundColor: 'var(--card-mint)', border: 'none' }}
                      value={form.email}
                      onChange={handleChange('email')}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter your Number"
                      style={{ backgroundColor: 'var(--card-mint)', border: 'none' }}
                      value={form.phone}
                      onChange={handleChange('phone')}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter your Message"
                      style={{ backgroundColor: 'var(--card-mint)', border: 'none' }}
                      value={form.message}
                      onChange={handleChange('message')}
                    ></textarea>
                    <div className="text-end small text-muted mt-1">
                      {form.message.length}/{MAX_MESSAGE_LENGTH} Chars
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-lime w-100">
                      Send Message
                    </button>
                    {submitted && (
                      <p className="text-center small mt-2 mb-0" style={{ color: 'var(--lime-dark)' }}>
                        Pesan kamu berhasil dikirim!
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6">
              <div
                className="rounded-card h-100 d-flex flex-column align-items-center justify-content-center text-white text-center p-4"
                style={{ backgroundColor: 'var(--darker-green)', minHeight: 320 }}
              >
                <i className="bi bi-map fs-1 mb-2" style={{ color: 'var(--lime)' }}></i>
                <p className="small mb-3">
                  Ganti bagian ini dengan Google Maps embed (iframe) sesuai lokasi kantor kamu.
                </p>
                <div className="d-flex gap-2">
                  {['facebook', 'twitter-x', 'linkedin'].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{ width: 40, height: 40, backgroundColor: 'var(--lime)', color: 'var(--darker-green)' }}
                    >
                      <i className={`bi bi-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-card mt-5 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
            style={{ backgroundColor: 'var(--card-mint)' }}
          >
            <div>
              <h4 className="mb-2">Are you ready to embark on a transformative journey towards better health and wellness?</h4>
              <p className="mb-0 small">Join us at Dietary and let us guide you on the path to a healthier and happier you.</p>
            </div>
            <a href="#" className="btn btn-lime text-nowrap">Join Us Now</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
