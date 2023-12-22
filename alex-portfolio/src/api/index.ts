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
