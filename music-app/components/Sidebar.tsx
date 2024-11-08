import Link from 'next/link'
import { Home, Music, Radio, Users, PlusSquare, Heart } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">PlayPals</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center space-x-2 hover:text-blue-400">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/player" className="flex items-center space-x-2 hover:text-blue-400">
              <Music size={20} />
              <span>Now Playing</span>
            </Link>
          </li>
          <li>
            <Link href="/chat" className="flex items-center space-x-2 hover:text-blue-400">
              <Users size={20} />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center space-x-2 hover:text-blue-400">
              <Radio size={20} />
              <span>Radio</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center space-x-2 hover:text-blue-400">
              <PlusSquare size={20} />
              <span>Create Playlist</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center space-x-2 hover:text-blue-400">
              <Heart size={20} />
              <span>Liked Songs</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}