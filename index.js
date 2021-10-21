document.querySelectorAll('.close-btn').forEach((element) => {
  element.addEventListener('click', function (e) {
    e.target.classList.toggle('pushed');
  });
});

// для всех страниц
const searchInp = document.querySelector('.search__input');

const getEventFocus = (e) => {
  e.target.nextElementSibling.classList.add('search__remove');
};

const getEventBlur = (e) => {
  e.target.nextElementSibling.classList.remove('search__remove');
};

searchInp.addEventListener('focus', getEventFocus);

searchInp.addEventListener('blur', getEventBlur);

if (searchInp.value === '') {
  getEventBlur();
  searchInp.removeEventListener('focus', getEventFocus);

  searchInp.removeEventListener('blur', getEventBlur);
}
