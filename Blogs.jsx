import { useEffect, useState } from 'react'

function timeAgo(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

function Blogs() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [bookmarked, setBookmarked] = useState({})
  const [liked, setLiked] = useState({})

  // useEffect: menarik data artikel kesehatan/nutrisi secara dinamis dari Public API (Dev.to)
  useEffect(() => {
    const controller = new AbortController()

    async function fetchArticles() {
      try {
        setLoading(true)
        const res = await fetch(
          'https://dev.to/api/articles?tag=health&per_page=4',
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error('Gagal memuat artikel')
        const data = await res.json()
        setArticles(data)
        setError(null)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
    return () => controller.abort()
  }, [])

  // useState: fitur interaktif bookmark artikel
  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="blog" className="py-5 bg-cream">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Blogs</h2>
          <p className="mx-auto" style={{ maxWidth: 620 }}>
            Our blog is a treasure trove of informative and engaging articles written by our team
            of nutritionists, dietitians, and wellness experts. Here's what you can expect from
            our blog.
          </p>
          <p className="small text-muted mb-0">
            Artikel di bawah ditarik langsung secara dinamis dari{' '}
            <a href="https://dev.to" target="_blank" rel="noreferrer">Dev.to Public API</a>.
          </p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border" style={{ color: 'var(--dark-green)' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="alert alert-warning text-center">
            Tidak bisa memuat artikel saat ini: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row g-4">
            {articles.map((post) => (
              <div className="col-md-6" key={post.id}>
                <div className="rounded-card overflow-hidden h-100" style={{ backgroundColor: 'var(--card-mint)' }}>
                  <img
                    src={post.cover_image || post.social_image}
                    alt={post.title}
                    className="w-100"
                    style={{ height: 220, objectFit: 'cover' }}
                  />
                  <div className="p-4">
                    <p className="small text-uppercase mb-1" style={{ color: 'var(--lime-dark)', fontWeight: 600 }}>
                      {post.tag_list?.[0] || 'Wellness'}
                    </p>
                    <h5 className="mb-2">{post.title}</h5>
                    <p className="small mb-3">
                      {(post.description || '').slice(0, 110)}
                      {(post.description || '').length > 110 ? '...' : ''}
                    </p>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={post.user?.profile_image_90}
                          alt={post.user?.name}
                          className="rounded-circle"
                          style={{ width: 36, height: 36, objectFit: 'cover' }}
                        />
                        <div>
                          <div className="fw-semibold small">{post.user?.name}</div>
                          <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                            {timeAgo(post.published_at)} · {post.reading_time_minutes} min read
                          </div>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm border-0"
                          onClick={() => toggleLike(post.id)}
                          aria-label="Like artikel"
                        >
                          <i
                            className={`bi ${liked[post.id] ? 'bi-heart-fill' : 'bi-heart'}`}
                            style={{ color: liked[post.id] ? 'var(--heart-pink)' : 'var(--text-dark)' }}
                          ></i>
                        </button>
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
              </div>
            ))}
          </div>
        )}

        {!loading && !error && (
          <p className="text-center mt-4 small text-muted">
            {Object.values(bookmarked).filter(Boolean).length} artikel disimpan ke bookmark kamu
          </p>
        )}
      </div>
    </section>
  )
}

export default Blogs
