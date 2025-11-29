// src/hooks/useDragScroll.ts
import { useEffect, RefObject } from 'react';

export default function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let hasMoved = false;
    let pointerId: number | null = null;
    const MOVE_THRESHOLD = 6; // pixels

    // track the original down target and whether a native click fired
    let downTarget: EventTarget | null = null;
    let nativeClickFired = false;
    let nativeClickListener: ((ev: MouseEvent) => void) | null = null;

    const onPointerDown = (e: PointerEvent) => {
      if (e.isPrimary === false) return;
      const downEl = e.target;
      if (downEl instanceof Element) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        downEl.dispatchEvent(clickEvent);
      }
      isDown = true;
      hasMoved = false;
      pointerId = e.pointerId;
      try {
        el.setPointerCapture(pointerId);
      } catch {}
      startX = e.clientX;
      startY = e.clientY;
      startScrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';

      // record the original target for potential synthetic click
      downTarget = e.target;
      nativeClickFired = false;
      // listen for any native click that happens right after pointerup
      nativeClickListener = () => {
        nativeClickFired = true;
      };
      // capture phase so we see the native click before child handlers run
      window.addEventListener('click', nativeClickListener, true);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) > MOVE_THRESHOLD) {
        hasMoved = true;
      }

      if (hasMoved) {
        // prevent text selection / native gestures while dragging
        e.preventDefault();
        el.scrollLeft = startScrollLeft - dx;
      }
    };

    const endDrag = () => {
      if (!isDown) {
        el.style.cursor = 'grab';
        return;
      }

      // if we actually dragged, swallow the following click event (one-time)
      if (hasMoved) {
        const onClickBlocker = (ev: MouseEvent) => {
          ev.stopImmediatePropagation?.();
          ev.preventDefault();
          // remove listener (capturing) after first invocation
          window.removeEventListener('click', onClickBlocker, true);
        };
        // capture phase so child click handlers won't run
        window.addEventListener('click', onClickBlocker, true);
      } else {
        // no drag: if native click didn't fire, dispatch a synthetic one
        // wait a tick so the native click (if any) can occur and be detected
        setTimeout(() => {
          // remove native click detector
          if (nativeClickListener) {
            window.removeEventListener('click', nativeClickListener, true);
            nativeClickListener = null;
          }

          if (!nativeClickFired && downTarget instanceof Element) {
            const clickEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window,
            });
            downTarget.dispatchEvent(clickEvent);
          }
        }, 0);
      }

      // cleanup & reset
      isDown = false;
      hasMoved = false;
      try {
        if (pointerId !== null) el.releasePointerCapture(pointerId);
      } catch {}
      pointerId = null;
      downTarget = null;
      nativeClickFired = false;
      el.style.cursor = 'grab';
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
      if (nativeClickListener) {
        window.removeEventListener('click', nativeClickListener, true);
        nativeClickListener = null;
      }
    };
  }, [ref]);
}
