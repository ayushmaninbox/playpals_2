import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

export function MusicPlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Album cover" className="w-12 h-12 rounded" />
        <div>
          <h3 className="font-semibold">Song Title</h3>
          <p className="text-sm text-gray-400">Artist Name</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SkipBack size={20} className="cursor-pointer" />
        {isPlaying ? (
          <Pause size={32} className="cursor-pointer" onClick={() => setIsPlaying(false)} />
        ) : (
          <Play size={32} className="cursor-pointer" onClick={() => setIsPlaying(true)} />
        )}
        <SkipForward size={20} className="cursor-pointer" />
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 size={20} />
        <input type="range" min="0" max="100" className="w-24" />
      </div>
    </div>
  )
}