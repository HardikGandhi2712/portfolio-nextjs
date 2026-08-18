import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Hardik Gandhi | Portfolio',
  description: 'Software Engineer Portfolio built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  )
}