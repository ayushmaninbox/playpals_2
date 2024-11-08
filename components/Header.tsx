import { UserButton } from "@clerk/nextjs";
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for artists, songs, or podcasts"
          className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <UserButton afterSignOutUrl="/" />
    </header>
  )
}