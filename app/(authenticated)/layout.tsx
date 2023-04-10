import Link from "next/link";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <body>
        <header className="bg-slate-900 text-white">
          <nav className="flex justify-between items-center max-w-[1240px] my-0 mx-auto p-4 h-16">
            <Link
              href="/"
              className="text-2xl font-semibold text-white hover:text-gray-400"
            >
              Example
            </Link>

            <ul className="list-none flex gap-4">
              <li>
                <Link href="/users" className="text-white hover:text-gray-400">
                  Users
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
