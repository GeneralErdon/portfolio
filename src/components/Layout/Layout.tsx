import type { ReactNode } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { profileDummydata } from "@/dummyData/profile"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            {profileDummydata.name}
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Sun className="h-5 w-5 hidden dark:block" />
              <Moon className="h-5 w-5 block dark:hidden" />
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {profileDummydata.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

