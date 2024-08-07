import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af7e7b20409e43418523173c0b7aec99",
  },
});
