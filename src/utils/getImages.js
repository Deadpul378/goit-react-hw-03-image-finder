import axios from 'axios';
const API_KEY = '29688961-a34b7cd8102492218da587dac';

export function getImages(query, pageNumber) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => {
      return response.data;
    });
}
