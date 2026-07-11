function ImagePlaceholder({ src, alt, icon = 'bi-image', height = 260, label }) {
  return (
    <div
      className="rounded-card overflow-hidden position-relative"
      style={{ backgroundColor: '#DCE9C6', height, minHeight: height }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
      )}
      <div
        className="w-100 h-100 align-items-center justify-content-center flex-column position-absolute top-0 start-0 p-3 text-center"
        style={{ display: src ? 'none' : 'flex' }}
      >
        <i className={`bi ${icon}`} style={{ fontSize: '2.4rem', color: 'var(--dark-green)' }}></i>
        {label && (
          <p className="small mb-0 mt-2" style={{ color: 'var(--dark-green)' }}>
            {label}
          </p>
        )}
      </div>
    </div>
  )
}

export default ImagePlaceholder
