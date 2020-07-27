import axios from 'axios';

const KEY = 'AIzaSyClLqLANxq5c0G90GUyevg1us4SN8UJOnU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
