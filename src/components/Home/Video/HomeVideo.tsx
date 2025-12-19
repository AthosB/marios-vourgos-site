'use client';

import { useEffect, useRef, useState } from "react";
import styles from "@/app/home/Home.module.scss";

const MOBILE_BREAKPOINT = 768;

export default function HomeVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile safely (client-only) */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Lazy-load when visible */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Force load + autoplay when src becomes available */
  useEffect(() => {
    const el = ref.current;
    if (!el || !shouldLoad) return;

    el.load();
    el.play().catch(() => {});
  }, [shouldLoad, isMobile]);

  const src = shouldLoad
    ? isMobile
      ? "/video/site_720p_mobile.mp4"
      : "/video/site_720p.mp4"
    : undefined;

  return (
    <div className={styles.Section} style={{ marginBottom: 64 }}>
      <div className={styles.VideoContainer}>
        <div className={styles.ResponsiveWrapper}>
          <video
            ref={ref}
            muted
            autoPlay
            loop
            controls
            playsInline
            preload={shouldLoad ? "metadata" : "none"}
            poster="/video/video_720p_poster.jpg"
            src={src}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </div>
  );
}
