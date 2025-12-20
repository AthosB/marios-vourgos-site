'use client';

import {useEffect, useMemo, useRef, useState} from "react";
import styles from "@/app/home/Home.module.scss";
// import {WistiaPlayer} from "@wistia/wistia-player-react";

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
      {rootMargin: "200px"}
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

    const tryPlay = () => el.play().catch(() => {
    });
    el.addEventListener("loadedmetadata", tryPlay, {once: true});
    el.addEventListener("canplay", tryPlay, {once: true});

    el.load();

    return () => {
      el.removeEventListener("loadedmetadata", tryPlay);
      el.removeEventListener("canplay", tryPlay);
    };
  }, [src]);

  return (
    <div className={styles.HomeVideo} style={{marginBottom: 64}}>
      <div className={styles.VideoContainer}>
        <div className={styles.ResponsiveWrapper} ref={observeRef}>
          {/*CLOUDFLARE*/}
          {/*<iframe*/}
          {/*  src="https://customer-fpkmis8n2lxizrve.cloudflarestream.com/e4b2715df10b1e33c88dc8e1fe02e768/iframe?preload=true&loop=true&autoplay=true&muted=true&poster=https%3A%2F%2Fcustomer-fpkmis8n2lxizrve.cloudflarestream.com%2Fe4b2715df10b1e33c88dc8e1fe02e768%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"*/}
          {/*  loading="lazy"*/}
          {/*  style={{*/}
          {/*    border: "none",*/}
          {/*    position: "absolute",*/}
          {/*    top: 0,*/}
          {/*    left: 0,*/}
          {/*    height: "100%",*/}
          {/*    width: "100%",*/}
          {/*  }}*/}
          {/*  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"*/}
          {/*  allowFullScreen*/}
          {/*/>*/}

          {/*VIMEO*/}
          <iframe
            src="https://player.vimeo.com/video/1148325516?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            title="I see you"
            allowFullScreen
          />
          {/*<WistiaPlayer*/}
          {/*  mediaId="zihtlepmi6"*/}
          {/*  aspect={1.7777777777777777}*/}
          {/*  autoplay={true}*/}
          {/*  controlsVisibleOnLoad={false}*/}
          {/*  fullscreenControl={true}*/}
          {/*  endVideoBehavior={'loop'}*/}
          {/*  playerColor={'transparent'}*/}
          {/*  preload={shouldLoad ? "metadata" : "none"}*/}
          {/*  poster={'/video/video_720p_poster.jpg'}*/}
          {/*/>*/}

          {/*  ref={videoRef}*/}
          {/*  muted*/}
          {/*  autoPlay*/}
          {/*  loop*/}
          {/*  controls*/}
          {/*  playsInline*/}
          {/*  preload={shouldLoad ? "metadata" : "none"}*/}
          {/*  poster="/video/video_720p_poster.jpg"*/}
          {/*  src={src}*/}
          {/*  style={{ width: "100%", height: "100%", objectFit: "contain" }}*/}
          {/*  onError={(e) => {*/}
          {/*    // If it still fails on iOS, this will show in Safari remote inspector*/}
          {/*    console.log("Video error", e);*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
}
