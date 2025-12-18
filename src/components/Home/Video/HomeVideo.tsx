'use client';

import {useEffect, useRef, useState} from "react";
import styles from "@/app/home/Home.module.scss";

export default function HomeVideo() {
  /** HOOKS & STATES **/
  const playerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

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
      { rootMargin: "200px" } // start loading a bit before it appears
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.Section} style={{ marginBottom: "64px", minHeight: 'auto' }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className={styles.VideoContainer}>
          <div className={styles.ResponsiveWrapper}>
            {/* YT API will inject the iframe here */}
            <div ref={playerRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
              <video
                ref={ref}
                muted
                autoPlay
                loop
                controls
                playsInline
                preload="none"
                poster="/video/video_720p_poster.jpg"
                style={{ width: "100%", height: "auto" }}
              >
                {shouldLoad && (
                  <source src="/video/site_720p.mp4" type="video/mp4" />
                )}
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
