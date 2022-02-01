import { useLoaderData } from 'remix';

import { BundesligaIcon } from '~/icons/leagues/bundesliga';
import { LaLigaIcon } from '~/icons/leagues/laliga';
import { Ligue1Icon } from '~/icons/leagues/ligue-1';
import { PremierLeagueIcon } from '~/icons/leagues/premier-league';
import { SerieAIcon } from '~/icons/leagues/serie-a';
import { FootballApi } from '~/services/api';

import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  const [
    premierLeague,
    laLiga,
    bundesliga,
    serieA,
    ligue1,
    championsLeague,
    europaLeague,
  ] = await Promise.all([
    FootballApi.get(`/CompetitionDetails/EPL`),
    FootballApi.get(`/CompetitionDetails/ESP`),
    FootballApi.get(`/CompetitionDetails/DEB`),
    FootballApi.get(`/CompetitionDetails/ITSA`),
    FootballApi.get(`/CompetitionDetails/FRL1`),
    FootballApi.get(`/CompetitionDetails/UCL`),
    FootballApi.get(`/CompetitionDetails/UEL`),
  ]);

  // const leagues = await Promise.all([
  //   FootballApi.get(`/CompetitionDetails/EPL`),
  //   FootballApi.get(`/CompetitionDetails/ESP`),
  //   FootballApi.get(`/CompetitionDetails/DEB`),
  //   FootballApi.get(`/CompetitionDetails/ITSA`),
  //   FootballApi.get(`/CompetitionDetails/FRL1`),
  //   FootballApi.get(`/CompetitionDetails/UCL`),
  //   FootballApi.get(`/CompetitionDetails/UEL`),
  // ]);

  // .map(([name, props]) => {
  //   const Overlay = overlays.get(name, null);
  //   return Overlay == null ? null : <Overlay key={name} {...props} />;
  // })
  // .valueSeq()
  // .toArray();

  // console.log({ rendered });

  // if (!P) {
  //   throw new Response('Countries not found!', {
  //     status: 404,
  //   });
  // }

  return {
    premierLeague: premierLeague.data,
    laLiga: laLiga.data,
    bundesliga: bundesliga.data,
    serieA: serieA.data,
    ligue1: ligue1.data,
    championsLeague: championsLeague.data,
    europaLeague: europaLeague.data,
  };
};

export default function Index() {
  const leagues = useLoaderData();

  console.log({ leagues });

  const leagueKeys = new Map([
    ['EPL', PremierLeagueIcon],
    ['ESP', LaLigaIcon],
    ['DEB', BundesligaIcon],
    ['ITSA', SerieAIcon],
    ['FRL1', Ligue1Icon],
  ]);

  const rendered = Array.from(leagueKeys.keys()).map(item => {
    const Component = leagueKeys.get(item);
    return <Component key={item} size={180} />;
  });

  return (
    <div className="container text-cyan-300">
      <PremierLeagueIcon size={432} />
      <LaLigaIcon size={348} />
      <BundesligaIcon size={332} />
      <SerieAIcon size={332} />
      <Ligue1Icon size={332} />

      {/* {rendered} */}
    </div>
  );
}
