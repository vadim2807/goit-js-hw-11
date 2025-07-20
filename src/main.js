import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

// Инициализация внутренних данных
export const form = document.querySelector('.form');
export const input = document.querySelector('input[name="search-text"]');
export const loader = document.querySelector('#loader');
export const gallery = document.querySelector('.gallery');

// Обработка формы
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showIziError('Поле пошуку не може бути порожнім');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
        hideLoader();
        input.value = "";
      const data = response.data;
      if (data.hits.length === 0) {
        showIziError('Sorry, there are no images matching your search query. Please try again!');
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      hideLoader();
      showIziError('Щось пішло не так... Ми вже працюємо над цією проблемою.');
      //console.log(error);
    });
});

// Функция для показа ошибок
function showIziError(txt) {
  iziToast.error({
    title: 'Error',
    message: `${txt}`,
    progressBar: false,
    transitionIn: 'fadeIn',
    position: 'topRight',
    animateInside: true,
  });
}