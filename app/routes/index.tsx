import { useEffect } from 'react';
import { useLoaderData } from 'remix';

import type { LoaderFunction } from 'remix';

export type CountriesProperties = {
  code: string;
  flag: string;
  name: string;
};

type Countries = {
  countries: CountriesProperties[];
};

export const loader: LoaderFunction = async (): Promise<
  Countries | Response
> => {
  return {};
  // const getCountriesLeague = await FootballApi.get(`/countries`);

  // if (!getCountriesLeague) {
  //   throw new Response('Countries not found!', {
  //     status: 404,
  //   });
  // }

  // return {
  //   countries: getCountriesLeague.data.response.filter(
  //     (countries: CountriesProperties) => countries.name === 'England'
  //   ),
  // };
};

export default function Index() {
  const countries = useLoaderData<CountriesProperties[]>();

  async function getUsers() {
    const res = await fetch('https://api.github.com/users/defunkt');
    const api_url = window.ENV.FOOTBALL_API_KEY;

    console.log({ api: api_url });

    const data = await res.json();

    return console.log({ data });
  }

  useEffect(() => {
    getUsers();
  }, []);

  // if (typeof window !== 'undefined') {
  //   console.log(window.ENV);
  // }

  // console.log(process);

  return <div>Index</div>;
}
