import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

// Setiap kategori di desain dipetakan ke tag Dev.to API yang relevan.
const categories = [
  { label: 'All', tag: null },
  { label: 'Weight Loss Tips', tag: 'weightloss' },
  { label: 'Healthy Eating', tag: 'nutrition' },
  { label: 'Fitness and Exercise', tag: 'fitness' },
  { label: 'Mindset and Motivation', tag: 'motivation' },
  { label: 'Recipes and Meal Planning', tag: 'food' },
]

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [bookmarked, setBookmarked] = useState({})

  // useEffect: menarik artikel untuk tiap kategori/tag secara paralel dari Dev.to Public API
  useEffect(() => {
    const controller = new AbortController()

    async function fetchAllCategories() {
      try {
        setLoading(true)
        const requests = categories
          .filter((c) => c.tag)
          .map((c) =>
            fetch(`https://dev.to/api/articles?tag=${c.tag}&per_page=4`, {
              signal: controller.signal,
            })
              .then((res) => (res.ok ? res.json() : []))
              .then((data) => data.map((post) => ({ ...post, __category: c.label })))
              .catch(() => [])
          )

        const results = await Promise.all(requests)
        const merged = results.flat()
        // buang duplikat (artikel bisa punya beberapa tag yang cocok)
        const unique = Array.from(new Map(merged.map((p) => [p.id, p])).values())
        setPosts(unique)
        setError(null)
      } catch (err) {
        if (err.name !== 'AbortError') setError('Gagal memuat artikel dari API')
      } finally {
        setLoading(false)
      }
    }

    fetchAllCategories()
    return () => controller.abort()
  }, [])

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredPosts =
    activeCategory === 'All' ? posts : posts.filter((p) => p.__category === activeCategory)

  return (
    <>
      <PageHeader
        title="Our Blogs"
        description="Welcome to the Blog section of Dietary, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
      >
        <p className="small text-muted mt-3 mb-0">
          Artikel ditarik langsung dari{' '}
          <a href="https://dev.to" target="_blank" rel="noreferrer">Dev.to Public API</a> sesuai kategori di bawah.
        </p>
      </PageHeader>

      <section className="py-4 bg-cream">
        <div className="container">
          <div
            className="d-flex flex-wrap gap-2 justify-content-center p-3 rounded-card"
            style={{ backgroundColor: 'var(--dark-green)' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.label}
                className="btn btn-sm rounded-pill px-3"
                style={{
                  backgroundColor: activeCategory === cat.label ? 'var(--lime)' : 'transparent',
                  color: activeCategory === cat.label ? 'var(--darker-green)' : '#EAF1DD',
                  fontWeight: activeCategory === cat.label ? 600 : 400,
                }}
                onClick={() => setActiveCategory(cat.label)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-cream">
        <div className="container">
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: 'var(--dark-green)' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="alert alert-warning text-center">{error}</div>
          )}

          {!loading && !error && filteredPosts.length === 0 && (
            <p className="text-center text-muted">Belum ada artikel untuk kategori ini.</p>
          )}

          {!loading && !error && (
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div className="col-md-6" key={post.id}>
                  <div className="rounded-card overflow-hidden h-100 bg-white">
                    <img
                      src={post.cover_image || post.social_image}
                      alt={post.title}
                      className="w-100"
                      style={{ height: 220, objectFit: 'cover' }}
                    />
                    <div className="p-4">
                      <p
                        className="small text-uppercase mb-2 fw-semibold d-inline-block"
                        style={{ color: 'var(--lime-dark)', borderBottom: '2px solid var(--lime-dark)' }}
                      >
                        {post.__category}
                      </p>
                      <h5 className="mb-2">{post.title}</h5>
                      <p className="small mb-3">
                        {(post.description || '').slice(0, 120)}
                        {(post.description || '').length > 120 ? '...' : ''}
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-lime btn-sm"
                        >
                          Read More
                        </a>
                        <button
                          className="btn btn-sm border-0"
                          onClick={() => toggleBookmark(post.id)}
                          aria-label="Simpan artikel"
                        >
                          <i
                            className={`bi ${bookmarked[post.id] ? 'bi-bookmark-fill' : 'bi-bookmark'}`}
                            style={{ color: bookmarked[post.id] ? 'var(--lime-dark)' : 'var(--text-dark)' }}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogPage
