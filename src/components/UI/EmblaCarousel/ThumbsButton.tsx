import React, {useRef} from 'react'

type PropType = {
  selected: boolean
  isLandscape?: boolean
  isVideo?: boolean
  isMobile?: boolean
  index: number
  imageSrc: string
  flex?: string
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { selected, isVideo = false, isLandscape = false, isMobile, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      ).concat(isMobile ? ' embla-thumbs__slide--mobile' : '')}
      style={{
        flex: isMobile ? isLandscape ? '0 0 40%' : '0 0 30%' : '0 0 7%',
        cursor: 'pointer',
        transformOrigin: 'center center'
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
            height: isMobile ? 74 : 123,
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
          backgroundImage: `url(${props.imageSrc})`
        }}
      >
      </button>)}
    </div>
  )
}
