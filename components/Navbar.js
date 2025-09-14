
import Link from 'next/link'
export default function Navbar(){ return (
  <nav className="navbar sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-white font-bold text-lg">PM Internship</div>
      <div className="flex items-center space-x-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  </nav>
)}