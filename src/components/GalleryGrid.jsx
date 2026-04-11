export default function GalleryGrid({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image) => (
        <figure key={image.src} className="gallery-item">
          <img src={image.src} alt={image.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}
