import { LitElement, html, css } from 'lit-element'
import './my-color-button'

class Palette extends LitElement {
  static get styles () {
    return css`
      :host {
        display: block;
        position: absolute;
        border: 2px solid saddlebrown;
        background-color: tan;
        border-radius: 5px;
        padding: 5px;
        width: 100px;
        top: 35%;
      }
    `
  }

  constructor () {
    super()

    this.colors = []

    // Create rainbow with HSL colors
    for (let i = 0; i < 360; i += 10) {
      const hue = i
      const saturation = 90
      const lightness = 60

      this.colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
    }
  }

  onColorClick (event) {
    const colorChangeEvent = new window.CustomEvent('color-change', {
      detail: { message: event.target.value },
      bubbles: true,
      composed: true
    })
    this.dispatchEvent(colorChangeEvent)
  }

  render () {
    return html`${this.colors.map(i => html`<my-color-button value='${i}' @click="${this.onColorClick}" .color=${i}></my-color-button>`)}`
  }
}

window.customElements.define('my-palette', Palette)
