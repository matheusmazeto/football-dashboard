import { getRequiredServerEnvVar } from '~/utils/misc';

export type Country = {
  code: string;
  flag: string;
  name: string;
};

const API_FOOTBALL_URL = getRequiredServerEnvVar('API_FOOTBALL_URL');
const API_FOOTBALL_KEY = getRequiredServerEnvVar('API_FOOTBALL_KEY');
const API_FOOTBALL_HOST = getRequiredServerEnvVar('API_FOOTBALL_HOST');

const headers = {
  'x-rapidapi-key': API_FOOTBALL_KEY,
  'x-rapidapi-host': API_FOOTBALL_HOST,
};

export async function getCountries() {
  const response = await fetch(`${API_FOOTBALL_URL}/countries`, {
    headers,
  });
  const json = await response.json();
  const countries: Country[] = json.response;

  return countries;
}
