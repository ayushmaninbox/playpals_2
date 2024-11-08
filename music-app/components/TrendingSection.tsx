export function TrendingSection() {
    return (
      <section className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add trending songs or albums here */}
          <div className="bg-gray-700 p-4 rounded">
            <img src="/placeholder.svg" alt="Album cover" className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="font-semibold">Song Title</h3>
            <p className="text-sm text-gray-400">Artist Name</p>
          </div>
          {/* Repeat for more items */}
        </div>
      </section>
    )
  }