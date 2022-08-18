import { LitElement, html, css } from "lit";

export class HeaderElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  render() {
    return html` <h1>Marvel-Comics ✨</h1> `;
  }
}

customElements.define("header-element", HeaderElement);
