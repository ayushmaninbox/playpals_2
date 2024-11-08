import { TrendingSection } from '@/components/TrendingSection'
import { PlaylistSection } from '@/components/PlaylistSection'

export default function Home() {
  return (
    <div className="space-y-8">
      <TrendingSection />
      <PlaylistSection />
    </div>
  )
}