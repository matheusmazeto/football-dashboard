import DarkModeToggle from '~/components/DarkModeToggle/DarkModeToggle';

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <DarkModeToggle />

      <div className="mt-16 max-w-xl mx-4 sm:mx-auto text-gray-900 dark:text-gray-50">
        <h1 className="text-4xl font-bold">Hey there 👋</h1>
        <p className="mt-4 text-lg">
          This is a demo for adding{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://tailwindcss.com/"
          >
            tailwindcss
          </a>{' '}
          and dark mode to a{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://remix.run/"
          >
            Remix
          </a>{' '}
          app. You can find the code on my{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://github.com/matheusmazeto/remix-tailwind-starter"
          >
            GitHub
          </a>
          .
        </p>
        <p className="text-lg">
          If you have any questions, feel free to message me on{' '}
          <a
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline hover:underline-offset-1"
            href="https://twitter.com/mazeto"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
}
