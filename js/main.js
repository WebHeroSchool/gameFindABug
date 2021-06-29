const listLevels = document.getElementsByClassName('list__level');
const button = document.querySelector('.container__button');
const rectangle = document.querySelectorAll('.rect');

let levels = [];

for (i = 0; i < listLevels.length; i++) {
  levels.push(listLevels[i].id);
}

const chooseLevelById = (ids) => {
  ids.forEach((id) => {
    let level = document.getElementById(id);
    level.addEventListener('click', () => {
      // let clickToList = document.querySelectorAll('.clickToList');
      // clickToList.forEach((item) => item.classList.remove('clickToList'));
      // level.classList.add('clickToList');
      rectangle.forEach((rect) => rect.classList.add('clickToList'));
      button.onclick = () => {
        document.location = `./table.html`;
        localStorage.setItem('level', id);
      };
    });

    level.addEventListener('mouseover', () => {
      rectangle.forEach((rect) => {
        if (
          level.classList.contains('simple') &&
          rect.classList.contains('rect1')
        ) {
          rect.classList.add('opacity');
        }
      });
    });
    level.addEventListener('mouseout', () => {
      rectangle.forEach((rect) => {
        rect.classList.remove('opacity');
      });
    });
  });
};
chooseLevelById(levels);
