import { Outlet } from 'remix';

import Sidebar from '~/components/Sidebar/Sidebar';

export default function Index() {
  return (
    <div className="h-full">
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}
