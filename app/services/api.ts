import axios from 'axios';

export const FootballApi = axios.create({
  baseURL: 'https://api.sportsdata.io/v3/soccer/scores/json/',
  method: 'GET',
  params: {
    key: process.env.FOOTBALL_API_KEY,
  },
});
