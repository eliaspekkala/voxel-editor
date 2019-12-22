import { LitElement, html, css } from 'lit-element';
import './app-bar-menu.js';

class AppBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: absolute;
        width: 100%;
        height: fit-content;
        background: linear-gradient(to right, #1488cc, #2b32b2);
        border-bottom: 1px solid #fefefe;
        -moz-user-select: none;
        user-select: none;
        z-index: 2;
      }
      h2 {
        color: #fefefe;
        display: inline;
        vertical-align: middle;
        margin: 0 6px;
      }
    `;
  }

  render() {
    return html`
      <h2>Voxel Editor</h2>

      <my-app-bar-menu
        titlex="File"
        .content="${['Save', 'Load', 'Export', 'Screenshot']}"
      ></my-app-bar-menu>

      <my-app-bar-menu
        titlex="Edit"
        .content="${['Settings']}"
      ></my-app-bar-menu>

      <my-app-bar-menu
        titlex="View"
        .content="${['Top', 'Right', 'Bottom', 'Left']}"
      ></my-app-bar-menu>
    `;
  }
}

window.customElements.define('my-app-bar', AppBar);
