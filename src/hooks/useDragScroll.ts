// typescript
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

    let downTarget: EventTarget | null = null;
    let nativeClickFired = false;
    let nativeClickListener: ((ev: MouseEvent) => void) | null = null;

    const recordDown = (clientX: number, clientY: number, target: EventTarget | null) => {
      isDown = true;
      hasMoved = false;
      startX = clientX;
      startY = clientY;
      startScrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
      downTarget = target;
      nativeClickFired = false;
      nativeClickListener = () => {
        nativeClickFired = true;
      };
      window.addEventListener('click', nativeClickListener, true);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.isPrimary === false) return;
      pointerId = e.pointerId;
      try { el.setPointerCapture(pointerId); } catch {}
      // keep non-passive so that some browsers allow preventDefault on move
      recordDown(e.clientX, e.clientY, e.target);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown || (e.isPrimary === false)) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) > MOVE_THRESHOLD) hasMoved = true;
      if (hasMoved) {
        // prevent native gestures and allow smooth JS scrolling
        e.preventDefault();
        el.scrollLeft = startScrollLeft - dx;
      }
    };

    const onPointerUp = (e?: PointerEvent) => {
      endDrag();
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      // record with non-passive start so we can capture subsequent non-passive move
      recordDown(t.clientX, t.clientY, e.target);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown) return;
      const t = e.touches && e.touches[0];
      if (!t) return;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) > MOVE_THRESHOLD) hasMoved = true;
      if (hasMoved) {
        // non-passive listener on the element lets this preventDefault on iOS
        e.preventDefault();
        el.scrollLeft = startScrollLeft - dx;
      }
    };

    const onTouchEnd = () => endDrag();

    const endDrag = () => {
      if (!isDown) {
        el.style.cursor = 'grab';
        return;
      }

      if (hasMoved) {
        const onClickBlocker = (ev: MouseEvent) => {
          ev.stopImmediatePropagation?.();
          ev.preventDefault();
          window.removeEventListener('click', onClickBlocker, true);
        };
        window.addEventListener('click', onClickBlocker, true);
      } else {
        setTimeout(() => {
          if (nativeClickListener) {
            window.removeEventListener('click', nativeClickListener, true);
            nativeClickListener = null;
          }
          if (!nativeClickFired && downTarget instanceof Element) {
            const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
            downTarget.dispatchEvent(clickEvent);
          }
        }, 0);
      }

      isDown = false;
      hasMoved = false;
      try { if (pointerId !== null) el.releasePointerCapture(pointerId); } catch {}
      pointerId = null;
      downTarget = null;
      nativeClickFired = false;
      el.style.cursor = 'grab';
    };

    // Attach listeners to the element (not window) and make move listeners non-passive
    el.addEventListener('pointerdown', onPointerDown, { passive: false } as AddEventListenerOptions);
    el.addEventListener('pointermove', onPointerMove as EventListener, { passive: false } as AddEventListenerOptions);
    el.addEventListener('pointerup', onPointerUp as EventListener, { passive: true } as AddEventListenerOptions);
    el.addEventListener('pointercancel', endDrag as EventListener, { passive: true } as AddEventListenerOptions);

    // iOS / older WebKit: attach touch handlers on the element with non-passive move
    el.addEventListener('touchstart', onTouchStart, { passive: false } as AddEventListenerOptions);
    el.addEventListener('touchmove', onTouchMove as EventListener, { passive: false } as AddEventListenerOptions);
    el.addEventListener('touchend', onTouchEnd as EventListener, { passive: true } as AddEventListenerOptions);
    el.addEventListener('touchcancel', endDrag as EventListener, { passive: true } as AddEventListenerOptions);

    // cleanup
    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove as EventListener);
      el.removeEventListener('pointerup', onPointerUp as EventListener);
      el.removeEventListener('pointercancel', endDrag as EventListener);

      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove as EventListener);
      el.removeEventListener('touchend', onTouchEnd as EventListener);
      el.removeEventListener('touchcancel', endDrag as EventListener);

      if (nativeClickListener) {
        window.removeEventListener('click', nativeClickListener, true);
        nativeClickListener = null;
      }
    };
  }, [ref]);
}
