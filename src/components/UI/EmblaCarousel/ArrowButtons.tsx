import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

const RESET_BUTTON_STYLE: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  outline: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px', // narrow
  height: '120px' // tall
}

const CHEVRON_SVG_STYLE: React.CSSProperties = {
  display: 'block',
  width: '12px',
  height: '72px',
  paddingTop: '16px'
}

const CHEVRON_COLOR = '#fcb040'

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, style, ...restProps } = props

  return (
    <button
      aria-label="Previous"
      type="button"
      {...restProps}
      style={{ ...RESET_BUTTON_STYLE, ...style }}
    >
      <svg
        viewBox="0 0 24 144"
        style={CHEVRON_SVG_STYLE}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <polyline
          points="16,12 8,72 16,132"
          fill="none"
          stroke={CHEVRON_COLOR}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, style, ...restProps } = props

  return (
    <button
      aria-label="Next"
      type="button"
      {...restProps}
      style={{ ...RESET_BUTTON_STYLE, ...style }}
    >
      <svg
        viewBox="0 0 24 144"
        style={CHEVRON_SVG_STYLE}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <polyline
          points="8,12 16,72 8,132"
          fill="none"
          stroke={CHEVRON_COLOR}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  )
}
