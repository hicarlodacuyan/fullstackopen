import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const config = { headers: { Authorization: token } }

  const request = await axios.post(baseUrl, newObject, config)
  return request.data
}

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject)

  return request.data
}

const deleteBlog = async (id) => {
  const config = { headers: { Authorization: token } }

  const request = await axios.delete(`${baseUrl}/${id}`, config)
  return request
}

export default { getAll, create, update, deleteBlog, setToken }
