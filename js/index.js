// mobile menu
const navSection = document.getElementById('nav-section');
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  navSection.classList.toggle('mobile-open');
  menu.style.display = 'none';
});

document.querySelectorAll('#nav-section a').forEach((element) => {
  element.addEventListener('click', () => {
    navSection.classList.remove('mobile-open');
    menu.style.display = 'block';
  });
});

const menuClose = document.getElementById('menu-close');
menuClose.addEventListener('click', () => {
  navSection.classList.remove('mobile-open');
  menu.style.display = 'block';
});

// Ends

//  specialist section
const specialistInformation = [
  {
    image: './images/specialist-1.jpg',
    name: 'Dr Hayley Clinton',
    role: 'Senior dermatologist and cosmotologist',
    achievement: 'Expert having research knowledge at 10+ years of experience in the field of Dermatology with most relevant qualifications, expertise and research',
  },
  {
    image: './images/specialist-2.jpg',
    name: 'Dr Samantha Varghese',
    role: 'Senior dermatologist and cosmotologist',
    achievement: 'Expert having research knowledge at 10+ years of experience in the field of Dermatology with most relevant qualifications, expertise and research',
  },
  {
    image: './images/specialist-3.jpg',
    name: 'Dr knight George',
    role: 'Senior dermatologist and cosmotologist',
    achievement: 'Expert having research knowledge at 10+ years of experience in the field of Dermatology with most relevant qualifications, expertise and research',
  },
  {
    image: './images/specialist-4.jpg',
    name: 'Dr Gladys Pirple',
    role: 'Senior dermatologist and cosmotologist',
    achievement: 'Expert having research knowledge at 10+ years of experience in the field of Dermatology with most relevant qualifications, expertise and research',
  },
  {
    image: './images/specialist-5.jpg',
    name: 'Dr Hillary Obi',
    role: 'Senior dermatologist and cosmotologist',
    achievement: 'Expert having research knowledge at 10+ years of experience in the field of Dermatology with most relevant qualifications, expertise and research',
  },
  {
    image: './images/specialist-6.jpg',
    name: 'Dr Kimberly Phillips',
    role: 'Senior dermatologist and cosmotologist',
    achievement: 'Expert having research knowledge at 10+ years of experience in the field of Dermatology with most relevant qualifications, expertise and research',
  },
];

const allSpecialist = document.getElementById('specialist-wrapper');
for (let i = 0; i < specialistInformation.length; i += 1) {
  const read = `
    <div class="specialist-container">
        <div class="specialist-image">
            <img src=${specialistInformation[i].image} alt= "Dr Hayley Clinton" class="featured-img">
        </div>
        <div class="doctor-bio">
            <h4 class="name">${specialistInformation[i].name}</h4>
            <p class="role"><i>${specialistInformation[i].role}</i></p>
            <hr>
            <p class="achievements">${specialistInformation[i].achievement}</p>
        </div>
    </div>
 `;
  allSpecialist.innerHTML += read;
}
