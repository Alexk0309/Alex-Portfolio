import axios from "axios";

export const getExperiences = () => {
  return axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/198227/?user_field_names=true&order_by=-Id",
    headers: {
      Authorization: `Token ${import.meta.env.VITE_EXPERIENCES_TOKEN}`,
    },
  })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const getProjects = () => {
  return axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/189547/?user_field_names=true&order_by=-Id",
    headers: {
      Authorization: `Token ${import.meta.env.VITE_PROJECTS_TOKEN}`,
    },
  })
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const CONTACT_FORM_API = "https://formie.dev/form/868ed042-014a-4c32-82d0-6bbb061354a7";