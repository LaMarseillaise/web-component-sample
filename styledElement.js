class StyledElement extends HTMLElement {
  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
      <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
      <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
        <i class="material-icons">add</i>
      </button>
    `
  }
}

customElements.define('styled-element', StyledElement)
