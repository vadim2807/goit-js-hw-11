import axios from 'axios';

export function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '51391148-cca0cd30758df7ebb9b563956',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    },
  });
}