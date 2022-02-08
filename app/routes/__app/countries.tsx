import { LoaderFunction, useLoaderData } from 'remix';

import { Country, getCountries } from '~/api/countries';

export const loader: LoaderFunction = async () => {
  const [user] = await Promise.all([getCountries()]);
  return user;
};

export default function Countries() {
  const countries = useLoaderData<Country[]>();

  console.log({ countries });

  return <div>countries</div>;
}
