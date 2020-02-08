import config from '@config';
import axios from 'axios';

function getMovies(title, page = 1) {
  return axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: config.API_KEY_OMDB,
      s: title,
      page,
    },
  });
}

export { getMovies };
