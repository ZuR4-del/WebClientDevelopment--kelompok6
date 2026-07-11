import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const plans = [
  {
    name: 'Basic Plan',
    monthly: 49000,
    features: [
      'Personalized nutrition plan tailored to your goals and dietary preferences.',
      'Access to our mobile app for convenient meal tracking and progress monitoring.',
      'Email support to address your questions and concerns.',
      'Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.',
    ],
    highlight: false,
  },
  {
    name: 'Premium Plan',
    monthly: 149000,
    features: [
      'All the features included in the Basic Plan.',
      'One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.',
      'Recipe recommendations and meal planning assistance.',
      'Priority email support for quicker responses to your inquiries.',
      'Educational resources and guides to deepen your understanding of nutrition and healthy habits.',
    ],
    highlight: true,
  },
  {
    name: 'Ultimate Plan',
    monthly: 299000,
    features: [
      'All the features included in the Plus Plan.',
      'Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.',
      'Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.',
      'Customized meal plans and recipe suggestions based on your preferences and nutritional needs.',
      'Priority email and phone support for immediate assistance.',
    ],
    note: 'The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.',
    highlight: false,
  },
]

const comparisonRows = [
  { label: 'Personalized Nutrition Plan', values: [true, true, true] },
  { label: 'Mobile App Access', values: [true, true, true] },
  { label: 'Email Support', values: [true, true, true] },
  { label: 'One-on One Video Consultations', values: [false, true, true] },
  { label: 'Recipe Recommendations and Meal Planning', values: [false, true, true] },
  { label: 'Priority Support', values: [false, true, true] },
  { label: 'Educational Resources and Guides', values: [false, true, true] },
  { label: 'Advanced Progress Tracking Tools', values: [false, false, true] },
  { label: 'Customized Meal Plans and Recipe Suggestions', values: [false, false, true] },
  { label: 'Phone Support', values: [false, false, true] },
]

const faqs = [
  {
    q: 'What is personalized nutrition coaching?',
    a: 'Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to craft a plan that fits your lifestyle and helps you achieve optimal health and wellness.',
  },
  { q: 'How can nutrition coaching help me lose weight?' },
  { q: 'Can I still enjoy my favorite foods while on a nutrition plan?' },
  { q: 'How often will I have contact with my nutritionist?' },
  { q: 'How long will it take to see results?' },
  { q: 'Are the meal plans and recipes provided suitable for vegetarians or vegans?' },
]

function formatRupiah(value) {
  return 'Rp' + Math.round(value).toLocaleString('id-ID')
}

function PricingPage() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <PageHeader
        title="Our Pricing"
        description="At Dietary, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle."
      />

      <section className="py-5 bg-cream">
        <div className="container py-4">
          <div className="d-flex justify-content-center mb-2">
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

          <div className="row g-4 align-items-stretch">
            {plans.map((plan) => {
              const price = billing === 'yearly' ? plan.monthly / 2 : plan.monthly
              return (
                <div className="col-md-4" key={plan.name}>
                  <div
                    className={`p-4 rounded-card h-100 d-flex flex-column ${plan.highlight ? 'shadow' : 'bg-white'}`}
                    style={{
                      backgroundColor: plan.highlight ? '#fff' : '#fff',
                      border: plan.highlight ? '2px solid var(--lime-dark)' : '1px solid #E3EDD3',
                    }}
                  >
                    <h5 className="mb-1">{plan.name}</h5>
                    <p className="small mb-3" style={{ color: 'var(--lime-dark)' }}>
                      Up to 50% off on Yearly Plan
                    </p>

                    <ul className="list-unstyled d-flex flex-column gap-2 mb-4 flex-grow-1">
                      {plan.features.map((f) => (
                        <li key={f} className="d-flex align-items-start gap-2 small p-2 rounded" style={{ backgroundColor: 'var(--card-mint)' }}>
                          <i className="bi bi-check-lg" style={{ color: 'var(--lime-dark)' }}></i>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.note && (
                      <div
                        className="p-3 rounded mb-3 small text-white"
                        style={{ backgroundColor: 'var(--dark-green)' }}
                      >
                        {plan.note}
                      </div>
                    )}

                    <div className="mb-3">
                      <span className="display-6 fw-bold" style={{ color: 'var(--dark-green)' }}>
                        {formatRupiah(price)}
                      </span>
                      <span className="text-muted"> /month</span>
                    </div>
                    <button className="btn btn-lime w-100">Choose Plan</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="table-responsive rounded-card overflow-hidden" style={{ backgroundColor: 'var(--card-mint)' }}>
            <table className="table mb-0 align-middle text-center">
              <thead>
                <tr>
                  <th className="text-start p-3" style={{ backgroundColor: 'var(--dark-green)', color: '#fff', borderRadius: 0 }}>
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="p-3" style={{ backgroundColor: 'var(--dark-green)', color: '#fff' }}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="text-start p-3">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="p-3">
                        <i
                          className={`bi ${val ? 'bi-check-lg' : 'bi-x-lg'}`}
                          style={{ color: val ? 'var(--lime-dark)' : '#C9A0A0' }}
                        ></i>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-5 bg-cream">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="mb-3">FAQ</h2>
            <p className="mx-auto" style={{ maxWidth: 620 }}>
              We address commonly asked questions and provide comprehensive answers to help you
              navigate your way through your nutrition and wellness journey.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-3">
                {faqs.map((item, i) => (
                  <div key={item.q} className="p-3 rounded-card bg-white">
                    <button
                      className="btn w-100 d-flex justify-content-between align-items-center text-start p-0 border-0"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    >
                      <span className="fw-semibold">{item.q}</span>
                      <span
                        className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: 'var(--dark-green)',
                          color: '#fff',
                        }}
                      >
                        <i className={`bi ${openFaq === i ? 'bi-dash-lg' : 'bi-plus-lg'}`}></i>
                      </span>
                    </button>
                    {openFaq === i && item.a && (
                      <p className="small mt-3 mb-0 pt-3 border-top">{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="p-4 rounded-card bg-white text-center h-100 d-flex flex-column align-items-center justify-content-center">
                <div
                  className="mb-3 d-flex align-items-center justify-content-center rounded-4"
                  style={{ width: 56, height: 56, backgroundColor: 'var(--lime)' }}
                >
                  <i className="bi bi-flower2 fs-4" style={{ color: 'var(--darker-green)' }}></i>
                </div>
                <h5 className="mb-2">Ask your question</h5>
                <p className="small mb-3">Feel Free to Ask questions on anytime</p>
                <Link to="/contact" className="btn btn-lime">Ask A Question</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingPage
