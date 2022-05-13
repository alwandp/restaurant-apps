class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar__brand">
        <h1><span>Hungry</span>Belly</h1>
      </div>
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="hamburger button">☰</button>
      </div>
      <nav id="drawerNavigation" class="app-bar__navigation">
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://github.com/alwandp">About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
