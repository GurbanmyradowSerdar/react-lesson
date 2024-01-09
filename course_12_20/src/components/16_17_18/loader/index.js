import axios from "axios";

const base_url = "https://api.restful-api.dev";
const baseAxios = axios.create({
  baseURL: base_url,
});

async function getContactById(id) {
  let result = {};

  await baseAxios
    .get(`/objects?id=${id}`)
    .then((res) => {
      result = {
        error: null,
        isError: false,
        body: res.data,
      };
    })
    .catch((err) => {
      result = {
        error: err.message,
        isError: true,
        body: null,
      };
    });

  return result;
}
export { getContactById };
