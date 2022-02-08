import { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Football | Home',
    description: 'Football dashboard home page.',
  };
};

export default function IndexApp() {
  return <>Home</>;
}
