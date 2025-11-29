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
 * returns {string} - The application version as a string (e.g. "v1.0.0")
 */
export const getAppVersion = (): string => {
  const appVersion =
    (packageJson as { version?: string })?.version ??
    '';

  if (!appVersion) return '';

  return `v${appVersion}`;
};