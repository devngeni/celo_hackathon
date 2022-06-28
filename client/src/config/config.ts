import axios from "axios";

export const config = {
  axios: axios.create({
    baseURL:
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:3006/api"
        : '"http://127.0.0.1:3006/api',
  }),
};
