import React, {useRef} from 'react'

type PropType = {
  selected: boolean
  isVideo?: boolean
  isMobile?: boolean
  index: number
  imageSrc: string
  flex?: string
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { selected, isVideo = false, isMobile, index, flex = '0 0 12%', onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      ).concat(isMobile ? ' embla-thumbs__slide--mobile' : '')}
      style={{
        flex: isMobile ? isVideo ? '0 0 36%' : '0 0 22%' : flex,
        cursor: 'pointer',
        transformOrigin: 'center center',
        width: (isMobile && isVideo) ? 95 : '100%'
      }}
      onClick={onClick}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
            height: isMobile ? 'calc(100% - 2px)' : 123,
            width: isMobile ? 'min-content' : 'min-content !important',
          }}
        >
          <source src={props.imageSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (<button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number embla-thumb-item"
        style={{
          backgroundImage: `url(${props.imageSrc})`,
          height: isMobile ? '100%' : 123,
          width: isMobile ? 'inherit' : '96px',
        }}
      >
      </button>)}
    </div>
  )
}
