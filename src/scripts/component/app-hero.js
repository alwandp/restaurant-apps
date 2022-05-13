class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-hero__inner">
        <h2>Restaurant Apps</h2>
        <p>Aplikasi web untuk melihat beragam rekomendasi restoran terbaik di Indonesia.</p>
      </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
