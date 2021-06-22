const table = document.querySelector('#table');
const level = localStorage.getItem('level');

let isCard = false;

const levels = new Map();
levels.set('simple', 3);
levels.set('medium', 6);
levels.set('hard', 10);

if (level === 'hard') {
  table.classList.remove('table');
  table.classList.add('table__hard');
}

const createCards = (isBug) => {
  let card = document.createElement('div');
  let inner = document.createElement('div');
  let back = document.createElement('div');
  let front = document.createElement('div');
  let imgBack = document.createElement('img');
  let imgFront = document.createElement('img');
  imgBack.setAttribute('src', './img/card_cover.png');
  imgFront.setAttribute(
    'src',
    isBug ? './img/card_bug.png' : './img/card_game_over.png'
  );
  front.append(imgFront);
  back.append(imgBack);
  inner.append(back);
  inner.append(front);
  card.append(inner);
  table.append(card);
  card.classList.add('card');
  imgBack.classList.add('card-img__back');
  imgFront.classList.add('card-img__front');

  if (level === 'hard') {
    inner.classList.add('card-inner__hard');
  } else {
    inner.classList.add('card-inner');
  }

  back.classList.add('card-inner__back');
  front.classList.add('card-inner__front', 'reverse');

  inner.onmouseover = () => back.classList.add('card__hover');
  inner.onmouseout = () => back.classList.remove('card__hover');

    card.addEventListener('click', () => {
      if (!isCard) {
      inner.classList.add('reverse');
      isCard = true;
      } else {
        document.location = './index.html'
      }
    });
}
const cardCount = levels.get(level);
const bugCardIndex = Math.floor(Math.random() * cardCount);

for (let i = 0; i < cardCount; i++) {
  createCards(i === bugCardIndex);
}
