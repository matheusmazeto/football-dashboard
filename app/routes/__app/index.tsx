import { LoaderFunction, MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Football | Home',
    description: 'Football dashboard home page.',
  };
};

export const loader: LoaderFunction = async () => {
  return null;
};

export default function IndexApp() {
  return <>Home</>;
}
