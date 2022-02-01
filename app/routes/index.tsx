import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  return null;
};

export default function Index() {
  return <div>Index</div>;
}
