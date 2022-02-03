import Main from '~/components/Main/Main';
import Sidebar from '~/components/Sidebar/Sidebar';

import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  return null;
};

export default function Index() {
  return (
    <div className="flex min-h-full">
      <Sidebar />
      <Main />
    </div>
  );
}
