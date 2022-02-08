import { LoaderFunction, useLoaderData } from 'remix';

import { getLeagues, Leagues } from '~/api/leagues';

export const loader: LoaderFunction = async () => {
  const leagues = getLeagues();
  return leagues;
};

export default function Leagues() {
  const leagues = useLoaderData<Leagues[]>();

  console.log({ leagues });

  return <div>Leagues</div>;
}
