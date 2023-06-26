function LoadMenu() {
  if (window.innerWidth < 768) {
    const menuBtn = document.querySelector('#Menu-button');
    const navMenu = document.querySelector('#mobile-Menu');
    const MenuOptions = navMenu.querySelectorAll('li');

    menuBtn.addEventListener('click', (event) => {
      event.preventDefault();
      navMenu.classList.remove('display-none');
    });

    MenuOptions.forEach((li) => {
      li.addEventListener('click', (event) => {
        navMenu.classList.add('display-none');
      });
    });
  }
}

export default LoadMenu;