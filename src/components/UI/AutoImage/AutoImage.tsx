'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useMemo, useState, CSSProperties } from 'react';
import {GenericItemType} from "@/Types/types";

type Props = Omit<ImageProps, 'width' | 'height' | 'fill'> & {
  /** The only dimension to control */
  height: number;
  /** Optional max width clamp (prevents super-wide panoramas from blowing up the carousel) */
  maxWidth?: number;
};

type Natural = { w: number; h: number };

function loadNaturalSize(src: string): Promise<Natural> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}

export default function AutoImage({
  src,
  alt,
  height,
  maxWidth,
  style,
  sizes,
  ...rest
}: Props) {
  const [natural, setNatural] = useState<Natural | null>(null);

  useEffect(() => {
    let cancelled = false;

    const srcStr = typeof src === 'string' ? src : (src as GenericItemType)?.src;
    if (!srcStr) return;

    loadNaturalSize(srcStr)
      .then((s) => {
        if (!cancelled) setNatural(s);
      })
      .catch(() => {
        if (!cancelled) setNatural(null);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  const computedWidth = useMemo(() => {
    if (!natural) return undefined;
    const ratio = natural.w / natural.h;
    const w = Math.round(height * ratio);
    return typeof maxWidth === 'number' ? Math.min(w, maxWidth) : w;
  }, [natural, height, maxWidth]);

  if (!computedWidth) {
    return (
      <span
        style={{
          display: 'inline-block',
          height,
          width: 1,
          ...((style as CSSProperties) ?? {}),
        }}
      />
    );
  }

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        height,
        width: computedWidth,
        overflow: 'hidden',
        ...((style as CSSProperties) ?? {}),
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? `${computedWidth}px`}
        style={{ objectFit: 'contain' }}
        draggable={false}
        {...rest}
      />
    </span>
  );
}
