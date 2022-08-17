import axios from 'axios'

const config = {
  API_URL: process.env.VUE_APP_API_URL,
}

const instance = axios.create({
  baseURL: config.API_URL,
})

async function fetchFriendList(param1, param2) {
  try {
    const response = await instance.get(`/id/237/${param1}/${param2}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export { fetchFriendList }
