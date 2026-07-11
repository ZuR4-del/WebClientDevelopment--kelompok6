import PageHeader from '../components/PageHeader.jsx'

const steps = [
  {
    icon: 'bi-clipboard2-check',
    title: '1. Konsultasi Awal',
    text: 'Ceritakan tujuan kesehatan, riwayat makan, dan preferensi kamu kepada nutritionist kami.',
  },
  {
    icon: 'bi-clipboard2-pulse',
    title: '2. Rencana Nutrisi Personal',
    text: 'Kami menyusun rencana makan yang disesuaikan dengan kebutuhan kalori dan gaya hidupmu.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: '3. Pendampingan & Evaluasi',
    text: 'Pantau progres lewat aplikasi, dapatkan penyesuaian rencana secara berkala dari tim kami.',
  },
]

function Process() {
  return (
    <>
      <PageHeader
        title="Our Process"
        description="Catatan: desain Figma untuk halaman Process belum diberikan. Ini adalah placeholder sementara mengikuti gaya visual halaman lain — silakan kirim desainnya kalau sudah ada, atau edit konten di src/pages/Process.jsx."
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {steps.map((step) => (
              <div className="col-md-4" key={step.title}>
                <div className="p-4 rounded-card h-100 text-center" style={{ backgroundColor: 'var(--card-mint)' }}>
                  <div
                    className="icon-badge mx-auto mb-3"
                    style={{ width: 56, height: 56, fontSize: '1.6rem' }}
                  >
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <h5 className="mb-2">{step.title}</h5>
                  <p className="small mb-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Process
