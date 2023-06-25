import LoadMenu from './Modules/Mobile-Menu.js';
import { LoadGuestsDesktop, LoadGuestsMobile, LoadMore } from './Modules/FeaturedSpeakers.js';

if (window.innerWidth < 768) {
  window.addEventListener('load', () => {
    LoadMenu();
    LoadGuestsMobile();
    LoadMore();
  });
  window.addEventListener('resize', () => {
    LoadMenu();
  });
}

if (window.innerWidth > 767) {
  window.addEventListener('load', () => {
    LoadGuestsDesktop();
  });
}