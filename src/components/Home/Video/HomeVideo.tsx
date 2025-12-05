'use client';

import {useEffect, useRef, useState} from "react";
import styles from "@/app/home/Home.module.scss";

type YouTubePlayer = {
  unMute: () => void;
  playVideo: () => void;
  destroy?: () => void;
};

export default function HomeVideo() {
  const VIDEO_ID = "RBhmLkhI-WI";
  const playerRef = useRef<HTMLDivElement | null>(null);
  const playerInstance = useRef<YouTubePlayer | null>(null);
  const [unmuted, setUnmuted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const win = window as Window & { YT?: unknown; onYouTubeIframeAPIReady?: () => void };

  function hasYTPlayer(obj: unknown): obj is { Player: new (el: HTMLElement | string, opts: unknown) => unknown } {
    return typeof obj === "object" && obj !== null && "Player" in (obj as Record<string, unknown>);
  }

  useEffect(() => {
    function createPlayer() {
      if (!playerRef.current || !win.YT || !hasYTPlayer(win.YT) || playerInstance.current) return;

      // instantiate player; do NOT assume methods exist until onReady fires
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - YT.Player constructor from YouTube API
      return new win.YT.Player(playerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1
        },
        events: {
          onReady: (e: { target?: unknown }) => {
            // assign the real API object when ready
            playerInstance.current = (e.target as unknown) as YouTubePlayer;
            setPlayerReady(true);
            // start playback (muted)
            (e.target as { playVideo?: () => void }).playVideo?.();
          }
        }
      });
    }

    if (win.YT && hasYTPlayer(win.YT)) {
      createPlayer();
    } else {
      const existing = Array.from(document.getElementsByTagName("script")).some(
        (s) => s.src.includes("https://www.youtube.com/iframe_api")
      );
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode!.insertBefore(tag, firstScript);
      }
      win.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      playerInstance.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enableAudio = () => {
    const p = playerInstance.current;
    if (p && typeof p.unMute === "function") {
      p.unMute();
      p.playVideo();
      setUnmuted(true);
    } else {
      console.warn("YouTube player not ready to unMute()");
    }
  };

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
            <div ref={playerRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />

            {!unmuted && playerReady && (
              <button className={styles.VideoOverlay} onClick={enableAudio} aria-label="Enable audio">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  aria-hidden="false"
                >
                  <path d="M5 9v6h4l5 4V5L9 9H5z" fill="currentColor" />
                  <path
                    d="M16.5 8.5a3.5 3.5 0 010 7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8 6.2a6 6 0 010 11.6"
                    stroke="currentColor"
                    strokeWidth="0.9"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
