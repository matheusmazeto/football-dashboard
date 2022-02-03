import { Link } from 'remix';

import { HomeIcon } from '~/icons/home';
import { MenuIcon } from '~/icons/menu';
import { MoonIcon } from '~/icons/moon';
import { SearchIcon } from '~/icons/search';
import { StarIcon } from '~/icons/star';
import { SunIcon } from '~/icons/sun';

const navigationItems = [
  { name: 'Home', href: '/', Icon: HomeIcon },
  { name: 'Favorites', href: '/favorite', Icon: StarIcon },
  { name: 'Search', href: '/', Icon: SearchIcon },
];

export default function Sidebar() {
  function renderNavigationItems() {
    const items = navigationItems.map(({ Icon, href, name }) => {
      return (
        <Link
          to={href}
          className="flex gap-2 transition duration-300 ease-in-out text-zinc-400 hover:text-black"
        >
          <Icon />
          {/* <span>{name}</span> */}
        </Link>
      );
    });

    return items;
  }

  return (
    <aside className="flex-1 flex flex-col items-center max-w-[60px] shadow-lg divide-y-2 divide-zinc-100">
      <div className="py-4 text-zinc-400 hover:text-black">
        <MenuIcon className="cursor-pointer" />
      </div>
      <nav className="flex flex-col gap-4 py-4 mb-auto">
        {renderNavigationItems()}
      </nav>
      <div className="py-4 transition duration-300 ease-in-out stroke-zinc-400 hover:stroke-black">
        <SunIcon className="cursor-pointer" />
        <MoonIcon className="cursor-pointer" />
      </div>
    </aside>
  );
}
