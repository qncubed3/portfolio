import { useEffect, useRef, useState } from 'react'
import type { PreviewMedia } from '../../projects/types'

type ProjectPreviewDeckProps = {
  items: PreviewMedia[]
  aspectRatio?: number
  panelOpen?: boolean
  darkFrame?: boolean
}

export function ProjectPreviewDeck({
  items,
  aspectRatio,
  panelOpen = true,
  darkFrame = false,
}: ProjectPreviewDeckProps) {
  const [index, setIndex] = useState(0)

  if (items.length === 1) {
    return (
      <PreviewSlide
        item={items[0]}
        active={panelOpen}
        aspectRatio={aspectRatio}
        darkFrame={darkFrame}
      />
    )
  }

  return (
    <div className="preview-carousel">
      <div
        className={`preview-carousel-viewport${darkFrame ? ' preview-carousel-viewport--dark' : ''}`}
      >
        <div
          className="preview-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, itemIndex) => (
            <div key={`${item.type}-${item.src}`} className="preview-carousel-slide">
              <PreviewSlide
                item={item}
                active={panelOpen && itemIndex === index}
                aspectRatio={aspectRatio}
                darkFrame={darkFrame}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="preview-carousel-controls">
        <button
          type="button"
          className="preview-carousel-btn"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          aria-label="Previous preview"
        >
          ←
        </button>
        <span className="preview-carousel-count">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          className="preview-carousel-btn"
          onClick={() => setIndex((i) => i + 1)}
          disabled={index === items.length - 1}
          aria-label="Next preview"
        >
          →
        </button>
      </div>
    </div>
  )
}

function PreviewSlide({
  item,
  id,
  active = true,
  aspectRatio,
  darkFrame = false,
}: {
  item: PreviewMedia
  id?: string
  active?: boolean
  aspectRatio?: number
  darkFrame?: boolean
}) {
  const alt = item.alt ?? 'Project preview'
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (active) void video.play()
    else video.pause()
  }, [active])

  const frameClass = [
    'preview-media-frame',
    darkFrame && 'preview-media-frame--dark',
    aspectRatio && 'preview-media-frame--fixed',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={frameClass}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {item.type === 'video' ? (
        <video
          ref={videoRef}
          id={id}
          className="project-preview-video"
          src={item.src}
          autoPlay={active}
          loop
          muted
          playsInline
          disablePictureInPicture
          aria-label={alt}
        />
      ) : (
        <img
          id={id}
          className="project-preview-image"
          src={item.src}
          alt={alt}
          draggable={false}
        />
      )}
    </div>
  )
}
