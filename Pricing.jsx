import { useState } from 'react'

const plans = [
  {
    name: 'Basic Plan',
    monthly: 49000,
    desc: 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.',
  },
  {
    name: 'Premium Plan',
    monthly: 149000,
    desc: 'Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you will receive video consultations, priority support, and personalized recipe recommendations.',
  },
  {
    name: 'Ultimate Plan',
    monthly: 299000,
    desc: 'Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.',
  },
]

function formatRupiah(value) {
  return 'Rp' + value.toLocaleString('id-ID')
}

function Pricing() {
  // useState kedua: toggle interaktif Monthly / Yearly (diskon 50%)
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" className="py-5 bg-cream">
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="mb-3">Our Pricing</h2>
          <p className="mx-auto" style={{ maxWidth: 620 }}>
            We outline our flexible and affordable options to support you on your journey to
            optimal health and nutrition. We believe that everyone deserves access to personalized
            nutrition guidance and resources.
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <div className="p-1 rounded-pill d-inline-flex" style={{ backgroundColor: '#E3EDD3' }}>
            <button
              className="btn btn-sm rounded-pill px-3"
              style={{
                backgroundColor: billing === 'monthly' ? 'var(--dark-green)' : 'transparent',
                color: billing === 'monthly' ? '#fff' : 'var(--text-dark)',
              }}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className="btn btn-sm rounded-pill px-3"
              style={{
                backgroundColor: billing === 'yearly' ? 'var(--dark-green)' : 'transparent',
                color: billing === 'yearly' ? '#fff' : 'var(--text-dark)',
              }}
              onClick={() => setBilling('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>
        <p className="text-center small text-muted mb-4">Save 50% on Yearly</p>

        <div className="row g-4">
          {plans.map((plan) => {
            const price = billing === 'yearly' ? plan.monthly / 2 : plan.monthly
            return (
              <div className="col-md-4" key={plan.name}>
                <div className="p-4 rounded-card h-100 bg-white border">
                  <h5 className="mb-1">{plan.name}</h5>
                  <p className="small mb-3" style={{ color: 'var(--lime-dark)' }}>
                    Up to 50% off on Yearly Plan
                  </p>
                  <p className="small mb-4">{plan.desc}</p>
                  <div className="mb-4">
                    <span className="display-6 fw-bold" style={{ color: 'var(--dark-green)' }}>
                      {formatRupiah(Math.round(price))}
                    </span>
                    <span className="text-muted">/month</span>
                  </div>
                  <button className="btn btn-lime w-100">Choose Plan</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
