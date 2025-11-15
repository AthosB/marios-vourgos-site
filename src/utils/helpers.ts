import packageJson from '../../package.json';

/**
 * Pushes a new state to the browser history with the given hash.
 * @param hash {string} - The hash to be pushed to the browser history.
 */
export const pushAnchor = (hash: string) => {
  try {
    if (window?.history?.pushState) {
      window.history.pushState({}, '', hash);
    } else {
      window.location.hash = hash;
    }
  } catch {
    // noop in non-browser environments or if security prevents it
  }
};

/**
 * Get the current application version from package.json (bundled at build time).
 * Falls back to VITE_APP_VERSION if present.
 */
export const getAppVersion = (): string => {
  const raw =
    (packageJson as { version?: string })?.version ??
    '';

  if (!raw) return '';

  // Remove any leading 'v' or '.' and return with a single 'v' prefix
  const cleaned = raw.replace(/^[v.]+/, '');
  return `v${cleaned}`;
};