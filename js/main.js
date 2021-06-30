const listLevels = document.querySelectorAll('.list__level');
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
      const clickToList = document.querySelectorAll('.clickToList');
      clickToList.forEach((item) => item.classList.remove('clickToList'));
      level.classList.add('clickToList');
      button.onclick = () => {
        document.location = `./table.html`;
        localStorage.setItem('level', id);
      };
    });
  });
};
chooseLevelById(levels);
