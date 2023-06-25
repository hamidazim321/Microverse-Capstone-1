const mainContainer = document.querySelector('#Guest-Container');
const Guests = [
  {
    name: 'Daniel',
    title: 'Automotive Engineer',
    specialty: `Renowned for designing eco-friendly hybrid 
    engines that revolutionized the automotive industry`,
    image: 'Images/Daniel.jpg',
  },

  {
    name: 'Gareth',
    title: 'Racing Champion',
    specialty: `A multiple-time Formula One World Champion, 
    known for his exceptional driving skills and record-breaking lap times`,
    image: 'Images/Gareth.jpg',
  },

  {
    name: 'Emily',
    title: 'Automotive Journalist',
    specialty: `An esteemed journalist with deep insights into the latest 
    automotive trends and a passion for writing about cutting-edge technologies in the industry`,
    image: 'Images/Emily.png',
  },

  {
    name: 'Natalie',
    title: 'Concept Car Designer',
    specialty: `An innovative designer renowned for pushing the boundaries of automotive 
    design with futuristic and avant-garde concept car creations`,
    image: 'Images/Natalie.jpg',
  },

  {
    name: 'Marcus',
    title: 'Vintage Car Restorer',
    specialty: `A master restorer of classic cars, specializing in bringing vintage 
    automobiles back to their original glory`,
    image: 'Images/Marcus.jpg',
  },

  {
    name: 'Imran',
    title: 'Custom Car Builder',
    specialty: `A highly skilled custom car builder known for crafting unique and personalized 
    vehicles, blending artistry with automotive engineering`,
    image: 'Images/Imran.jpg',
  },
];

const speakersContainer = `<div class="speaker">
<div class="speaker-header">
  <img src="" class="speaker-img">
</div>
<div class="speaker-body">
  <h4 class="h4 speaker-name"></h4>
  <p class="speaker-title">
  </p>
  <span class="speaker-divider"></span>
  <p class="speaker-status">
  </p>
</div>
</div>

<div class="speaker">
<div class="speaker-header">
  <img src="" class="speaker-img">
</div>
<div class="speaker-body">
  <h4 class="h4 speaker-name"></h4>
  <p class="speaker-title">
  </p>
  <span class="speaker-divider"></span>
  <p class="speaker-status">
  </p>
</div>
</div>`;

let counter = Guests.length - 1;
const MoreButton = mainContainer.querySelector('.See-more');

function LoadGuestsMobile() {
  const format = document.createElement('div');
  format.classList.add('speakersContainer');

  format.innerHTML = speakersContainer;

  const speakers = format.querySelectorAll('.speaker');
  speakers.forEach((speaker) => {
    const image = speaker.querySelector('.speaker-img');
    const title = speaker.querySelector('.speaker-title');
    const status = speaker.querySelector('.speaker-status');
    const name = speaker.querySelector('.speaker-name');

    image.src = Guests[counter].image;
    title.textContent = Guests[counter].title;
    status.textContent = Guests[counter].specialty;
    name.textContent = Guests[counter].name;
    counter -= 1;
  });
  mainContainer.insertBefore(format, MoreButton);
  if (counter < 0) {
    mainContainer.removeChild(MoreButton);
  }
}
function LoadMore() {
  MoreButton.addEventListener('click', () => {
    LoadGuestsMobile();
  });
}

function LoadGuestsDesktop() {
  for (let count = 0; count < Guests.length / 2; count += 1) {
    LoadGuestsMobile();
  }
}

export { LoadGuestsMobile, LoadMore, LoadGuestsDesktop };
