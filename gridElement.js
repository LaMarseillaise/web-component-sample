class GridElement extends HTMLElement {
  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = `
      <style>
        :host {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
        }

        :host > div {
          display: flex;
          border: 1px solid black;
          background-color: red;
          color: blue;
        }
      </style>
    `

    let child
    for(let i = 0; i < 5; i++) {
      child = document.createElement('div')
      child.textContent = 'some div'
      this.shadow.appendChild(child)
    }
  }
}

customElements.define('grid-element', GridElement)
