const container = document.querySelector('.container');
const levelLinks = document.querySelectorAll('.lvl-list__link');
const button = document.querySelector('.button');

const firstLvl = document.querySelector('.first-lvl');
const secondLvl = document.querySelector('.second-lvl');
const thirdLvl = document.querySelector('.third-lvl');

const startMenu = document.querySelector('.start-menu');

const createCard = () => {
  const closedCard = document.createElement('div');
  closedCard.classList.add('img-lvl1');
  container.appendChild(closedCard);
  container.classList.add('flex');
  startMenu.style.display = 'none';
};

levelLinks.forEach((levelLink) => {
  levelLink.addEventListener('click', () => {
    if (levelLink === firstLvl) {
      button.addEventListener('click', () => {
        createCard();
        createCard();
        createCard();
      });
    }

    if (levelLink === secondLvl) {
      button.addEventListener('click', () => {
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
      });
    }

    if (levelLink === thirdLvl) {
      button.addEventListener('click', () => {
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
        createCard();
      });
    }
  });
});

// const levelLinks = document.querySelectorAll('.lvl-list__link');
// const levelItems = document.querySelectorAll('.lvl-list__item');

// let rect = document.createElement('img');
// rect.classList.add('rectangle');

// levelLinks.forEach((levelLink) => {
//   levelLink.onmouseover = (event) => {
//     if (event) {
//     }
//     // let target = event.target;
//     // target.style.color = '#d62b2e';
//     // levelItems.forEach((levelItem) => {
//     //   levelItem.insertBefore(rect, levelLink);
//     // });
//   };

//   levelLink.onmouseout = (event) => {
//     // let target = event.target;
//     // target.style.color = '#fff';
//     rect.remove();
//   };
// });

// // levelLinks.forEach((levelLink) => {
// //   levelLink.addEventListener('mouseover', () => {
// //     levelLink.classList.add('before');
// //   });
// // });
