import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: 'nErQyfpsc7H4LMHnpQBKl1o6zANWnvDO',
    limit: 10
  }
})