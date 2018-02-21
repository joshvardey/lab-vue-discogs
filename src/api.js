// src/api.js
import axios from "axios";

const discogs = axios.create({
  baseURL: "https://api.discogs.com",
  httpAgent: "Ironhack Paris Jocelynv/1.0 +http://localhost",
  params: {
    token: "XREeTkmGefZfXVtOcrapbXekXxGRPHhiHSqGjjqB"
  }
});

export default {
  getArtist: artist =>
    discogs
      .get("database/search", {
        params: {
          q: query,
          type: "artist"
        }
      })
      .then(res => res.data)
};
