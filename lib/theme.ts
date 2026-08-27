/**
 * Theme plumbing shared by the root layout and the toggle.
 *
 * Deliberately its own module, not an export of the toggle: the root layout
 * (a server component) needs these values at build time, and every export of a
 * "use client" module reaches a server component as a client reference proxy
 * rather than the value itself.
 */

/** Where a visitor's choice is remembered. */
export const THEME_KEY = "cl_theme";

/**
 * The pre-paint script, inlined into <head>.
 *
 * Dark is the default, so only "light" needs writing — no attribute already
 * means dark, which is why a returning dark visitor costs nothing and why a
 * first-time visitor never sees a flash. It has to be blocking and inline:
 * anything waiting on React would paint the dark default and then flip.
 */
export const themeInitScript = `try{if(localStorage.getItem(${JSON.stringify(
  THEME_KEY
)})==="light")document.documentElement.dataset.theme="light"}catch(e){}`;
