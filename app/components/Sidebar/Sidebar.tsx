import { MenuIcon, HomeIcon, StarIcon } from '@heroicons/react/outline';
import { Link } from 'remix';

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

export default function Sidebar() {
  return (
    <aside className="flex-1 flex flex-col items-center max-w-[60px] shadow-lg divide-y-2 divide-zinc-100">
      <div className="py-4">
        <MenuIcon className="w-6 transition duration-300 ease-in-out cursor-pointer stroke-zinc-400 hover:stroke-black" />
      </div>
      <nav className="flex flex-col gap-4 py-4">
        <Link to="/">
          <HomeIcon className="w-6 transition duration-300 ease-in-out stroke-zinc-400 hover:stroke-black" />
        </Link>
        <Link to="/">
          <StarIcon className="w-6 transition duration-300 ease-in-out stroke-zinc-400 hover:stroke-black" />
        </Link>
      </nav>
      <div className="py-4 mt-auto">
        <StarIcon className="w-6 transition duration-300 ease-in-out stroke-zinc-400 hover:stroke-black" />
      </div>
    </aside>
  );
}
