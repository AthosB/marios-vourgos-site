'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "@/app/home/Home.module.scss";

const MOBILE_BREAKPOINT = 768;

export default function HomeVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const observeRef = useRef<HTMLDivElement | null>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Detect mobile + iOS (client only)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();

    const ua = navigator.userAgent;
    const ios =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes("Mac") && "ontouchend" in document);
    setIsIOS(ios);

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Observe wrapper (not the <video>) + failsafe
  useEffect(() => {
    const target = observeRef.current;
    if (!target) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    io.observe(target);

    // Failsafe for iOS/WebKit quirks
    const t = window.setTimeout(() => setShouldLoad(true), 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const src = useMemo(() => {
    if (!shouldLoad) return undefined;
    if (isIOS) return "/video/site_720p_ios.mp4";
    if (isMobile) return "/video/site_720p_mobile.mp4";
    return "/video/site_720p.mp4";
  }, [shouldLoad, isIOS, isMobile]);

  // Load + autoplay when src is set (more reliable on iOS when using events)
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !src) return;

    const tryPlay = () => el.play().catch(() => {});
    el.addEventListener("loadedmetadata", tryPlay, { once: true });
    el.addEventListener("canplay", tryPlay, { once: true });

    el.load();

    return () => {
      el.removeEventListener("loadedmetadata", tryPlay);
      el.removeEventListener("canplay", tryPlay);
    };
  }, [src]);

  return (
    <div className={styles.Section} style={{ marginBottom: 64 }}>
      {isIOS ? <div>iOS</div> : null}
      <div className={styles.VideoContainer}>
        <div className={styles.ResponsiveWrapper} ref={observeRef}>
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            controls
            playsInline
            preload={shouldLoad ? "metadata" : "none"}
            poster="/video/video_720p_poster.jpg"
            src={src}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onError={(e) => {
              // If it still fails on iOS, this will show in Safari remote inspector
              console.log("Video error", e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
