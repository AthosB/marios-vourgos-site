'use client'

import {useState, useEffect, ReactNode} from "react";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";
import {GenericItemType} from "@/Types/types";
import DesktopCarousel from "@/components/UI/CustomEmblaCarouselBCK/DesktopCarousel";

interface DynamicCarouselProps {
  slides: GenericItemType[];
  showTitle?: boolean;
  showDescription?: boolean;
  showDisclaimer?: boolean;
  disclaimer?: string | ReactNode;
}

export default function DynamicCarousel({
                                          slides = [],
                                          showTitle = true,
                                          showDescription = true,
                                          showDisclaimer = false,
                                          disclaimer
                                        }: DynamicCarouselProps) {
  /** STATES **/
  const [isMobile, setIsMobile] = useState(false);

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mobile = window.matchMedia('(max-width: 950px)').matches;
    setIsMobile(mobile);
  }, []);

  /** RENDER **/
  if (isMobile) {
    return <CustomEmblaCarousel
      slides={slides}
      thumbHeight={100}
      pageSize={3}
      showDots={false}
      dragFree={false}
      showTitle={showTitle}
      showDescription={showDescription}
      showDisclaimer={showDisclaimer}
      disclaimer={disclaimer}
    />
  } else {
    return <DesktopCarousel
      slides={slides}
      thumbHeight={150}
      pageSize={3}
      showDots={true}
      dragFree={false}
      showTitle={showTitle}
      showDescription={showDescription}
      showDisclaimer={showDisclaimer}
      disclaimer={disclaimer}
    />
  }
}