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