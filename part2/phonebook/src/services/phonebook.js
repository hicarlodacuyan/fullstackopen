import axios from "axios";

const baseURL = "http://localhost:3001/phonebook";

const getAllContacts = () => {
  return axios.get(baseURL).then((response) => response.data);
};

const createContact = (newObject) => {
  return axios.post(baseURL, newObject).then((response) => response.data);
};

const deleteContact = (id) => {
  return axios.delete(`${baseURL}/${id}`).then((response) => response);
};

const updateContact = (id, newObject) => {
  return axios
    .put(`${baseURL}/${id}`, newObject)
    .then((response) => response.data);
};

export default {
  getAllContacts,
  createContact,
  deleteContact,
  updateContact,
};
