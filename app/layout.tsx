import './globals.css'
import Sidebar from '@/components/Sidebar/Sidebar'

export const metadata = {
  title: 'Dashboard',
  description: 'Generated Articles UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-[#f3f4f6] text-gray-900">
        <Sidebar />
        <main className="flex-1 p-10">{children}</main>
      </body>
    </html>
  )
}
