import { getRequiredServerEnvVar } from '~/utils/misc';

export type Country = {
  code: string;
  flag: string;
  name: string;
};

export type League = {
  id: number;
  name: string;
  type: string;
  logo: string;
};

export type Season = {
  year: number;
  start: number;
  end: number;
  current: boolean;
  coverage: {
    fixtures: object;
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    predictions: boolean;
    odds: boolean;
  };
};

export type Leagues = {
  country: Country;
  league: League;
  season: Season[];
};

const API_FOOTBALL_URL = getRequiredServerEnvVar('API_FOOTBALL_URL');
const API_FOOTBALL_KEY = getRequiredServerEnvVar('API_FOOTBALL_KEY');
const API_FOOTBALL_HOST = getRequiredServerEnvVar('API_FOOTBALL_HOST');

const headers = {
  'x-rapidapi-key': API_FOOTBALL_KEY,
  'x-rapidapi-host': API_FOOTBALL_HOST,
};

export async function getLeagues() {
  const response = await fetch(`${API_FOOTBALL_URL}/leagues`, {
    headers,
  });
  const json = await response.json();
  const leagues: Leagues[] = json.response;

  return leagues;
}
