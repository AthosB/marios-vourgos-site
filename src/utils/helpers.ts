// src/utils/helpers.ts
import packageJson from '../../package.json';

export const pushAnchor = (hash: string) => {
  try {
    if (window?.history?.pushState) {
      window.history.pushState({}, '', hash);
    } else {
      window.location.hash = hash;
    }
    // try to scroll immediately after updating the URL
    // scrollToHash(hash);
  } catch {
    // noop in non-browser environments or if security prevents it
  }
};

/**
 * Scroll to an element referenced by a hash (e.g. "#section-3").
 * - retries until the element appears (useful when React is mounting)
 * - will fall back to a root section id if the exact hashed element is missing
 * - supports an optional vertical offset and smooth behavior
 */
export const scrollToHash = (
  hash?: string,
  offset = 0,
  smooth = true,
) => {
  if (typeof window === 'undefined' || !hash) return;

  const selector = hash.startsWith('#') ? hash : `#${hash}`;

  // Try to find the element
  const el = document.querySelector(selector);
  if (el) {
    const rect = (el as HTMLElement).getBoundingClientRect();
    const top = rect.top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: smooth ? 'smooth' : 'auto',
    });
    return;
  }

  // Fallback: if hash looks like "#section-123" try "#section"
  const fallbackMatch = selector.match(/^#([a-z0-9\-]+)-\d+/i);
  if (!el && fallbackMatch) {
    const rootSelector = `#${fallbackMatch[1]}`;
    const rootEl = document.querySelector(rootSelector);
    if (rootEl) {
      const rect = (rootEl as HTMLElement).getBoundingClientRect();
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: smooth ? 'smooth' : 'auto',
      });
      return;
    }
  }

  // Retry with delay while React may be rendering the target element
  // if (attempt < maxAttempts) {
  //   window.setTimeout(() => {
  //     console.log(`[scrollToHash] Retrying... (${attempt + 1}/${maxAttempts}): ${hash}`);
  //     scrollToHash(hash, offset, smooth, maxAttempts, attempt + 1);
  //   }, 2000);
  // }
};

/**
 * Get the current application version from package.json (bundled at build time).
 * returns {string} - The application version as a string (e.g. "v1.0.0")
 */
export const getAppVersion = (): string => {
  const appVersion =
    (packageJson as { version?: string })?.version ??
    '';

  if (!appVersion) return '';

  return `v${appVersion}`;
};