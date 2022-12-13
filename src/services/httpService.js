import axios from 'axios'

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/plane'

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default http
