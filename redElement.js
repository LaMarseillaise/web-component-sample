class RedElement extends HTMLElement {
  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = `
      <style>
        .red-background { background-color: red; }
      </style>
      <div class="red-background blue-text">
        Why is this text not blue?
      </div>
    `
  }
}

customElements.define('red-element', RedElement)
