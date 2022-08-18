/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'index.rocket.js';
import { html, layout, components } from './recursive.data.js';
export { html, layout, components };
export async function registerCustomElements() {
  // server-only components
  customElements.define('header-element', await import('#components/header-element/header-element.js').then(m => m.HeaderElement));
}
/* END - Rocket auto generated - do not touch */

export default () => html` <header-element></header-element> `;
