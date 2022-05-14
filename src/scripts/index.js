import 'regenerator-runtime'; /* for async await transpile */
import './component/app-bar';
import './component/app-hero';
import './component/app-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/appbar.css';
import '../styles/apphero.css';
import '../styles/appfooter.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawerNavigation'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('app-bar');
  sticky.classList.toggle('sticky', window.scrollY > 0);
});
