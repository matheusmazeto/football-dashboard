import Sidebar from '~/components/Sidebar/Sidebar';

import type { MetaFunction, LoaderFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Football | Home',
    description: 'Football dashboard home page.',
  };
};

export const loader: LoaderFunction = async () => {
  return null;
};

export default function Index() {
  return (
    <div className="h-full">
      <Sidebar />
    </div>
  );
}
