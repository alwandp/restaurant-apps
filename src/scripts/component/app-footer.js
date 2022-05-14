class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>copyright&copy; 2022, <span>HungryBelly</span></p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
