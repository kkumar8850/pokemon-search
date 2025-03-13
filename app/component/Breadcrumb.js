'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathName = usePathname()

  const paths = pathName.split("/").filter((p) => p);

  return (
    <nav className="text-gray-600 text-sm py-3">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="flex items-center text-blue-500 hover:underline ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M5 12l5 -5v4h4v-4l5 5l-5 5v-4h-4v4z"/>
            </svg>
            Home
          </Link>
        </li>

        {paths.map((path, index) => {
          const url = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-400 capitalize">{path}</span>
              ) : (
                <Link href={url} className="text-blue-500 hover:underline capitalize">
                  {path}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}