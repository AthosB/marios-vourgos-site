// src/utils/helpers.ts
import packageJson from '../../package.json';

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