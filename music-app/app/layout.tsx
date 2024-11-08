import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MusicPlayerBar } from '@/components/MusicPlayerBar'

export const metadata = {
  title: 'PlayPals - Music & Friends',
  description: 'Listen to music and chat with friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-900 text-white">
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
              <MusicPlayerBar />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}