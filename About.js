import LoadMenu from './Modules/Mobile-Menu.js';

if (window.innerWidth < 768) {
  window.addEventListener('load', () => {
    LoadMenu();
  });
}