const header = document.querySelector('.header');
const levelLinks = document.querySelectorAll('.lvl-list__link');
const button = document.querySelector('.button');
const wrap = document.querySelector('.wrap');

const firstLvl = document.querySelector('.first-lvl');
const secondLvl = document.querySelector('.second-lvl');
const thirdLvl = document.querySelector('.third-lvl');

levelLinks.forEach((levelLink) => {
  levelLink.addEventListener('click', () => {
    if (levelLink === firstLvl) {
      button.addEventListener('click', () => {
        document.body.classList.add('flex1');
        header.style.display = 'none';
        const closedCard1 = document.createElement('div');
        closedCard1.classList.add('img-lvl1');
        document.body.appendChild(closedCard1);
        const closedCard2 = document.createElement('div');
        closedCard2.classList.add('img-lvl1');
        document.body.appendChild(closedCard2);
        const closedCard3 = document.createElement('div');
        closedCard3.classList.add('img-lvl1');
        document.body.appendChild(closedCard3);

        // closedCard1.addEventListener('click', () => {
        //   closedCard1.
        // })
      });
    }

    if (levelLink === secondLvl) {
      button.addEventListener('click', () => {
        document.body.classList.add('flex2');
        header.style.display = 'none';
        const closedCard1 = document.createElement('div');
        closedCard1.classList.add('img-lvl2');
        document.body.appendChild(closedCard1);
        const closedCard2 = document.createElement('div');
        closedCard2.classList.add('img-lvl2');
        document.body.appendChild(closedCard2);
        const closedCard3 = document.createElement('div');
        closedCard3.classList.add('img-lvl2');
        document.body.appendChild(closedCard3);
        const closedCard4 = document.createElement('div');
        closedCard4.classList.add('img-lvl2');
        document.body.appendChild(closedCard4);
        const closedCard5 = document.createElement('div');
        closedCard5.classList.add('img-lvl2');
        document.body.appendChild(closedCard5);
        const closedCard6 = document.createElement('div');
        closedCard6.classList.add('img-lvl2');
        document.body.appendChild(closedCard6);
      });
    }

    if (levelLink === thirdLvl) {
      button.addEventListener('click', () => {
        document.body.classList.add('flex3');
        header.style.display = 'none';
        const closedCard1 = document.createElement('div');
        closedCard1.classList.add('img-lvl3');
        document.body.appendChild(closedCard1);
        const closedCard2 = document.createElement('div');
        closedCard2.classList.add('img-lvl3');
        document.body.appendChild(closedCard2);
        const closedCard3 = document.createElement('div');
        closedCard3.classList.add('img-lvl3');
        document.body.appendChild(closedCard3);
        const closedCard4 = document.createElement('div');
        closedCard4.classList.add('img-lvl3');
        document.body.appendChild(closedCard4);
        const closedCard5 = document.createElement('div');
        closedCard5.classList.add('img-lvl3');
        document.body.appendChild(closedCard5);
        const closedCard6 = document.createElement('div');
        closedCard6.classList.add('img-lvl3');
        document.body.appendChild(closedCard6);
        const closedCard7 = document.createElement('div');
        closedCard7.classList.add('img-lvl3');
        document.body.appendChild(closedCard7);
        const closedCard8 = document.createElement('div');
        closedCard8.classList.add('img-lvl3');
        document.body.appendChild(closedCard8);
        const closedCard9 = document.createElement('div');
        closedCard9.classList.add('img-lvl3');
        document.body.appendChild(closedCard9);
        const closedCard10 = document.createElement('div');
        closedCard10.classList.add('img-lvl3');
        document.body.appendChild(closedCard10);
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
