
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="hero flex-1 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h1 className="hero-title">AI-Powered PM Internship Recommendation Engine</h1>
          <p className="mt-6 text-lg text-gray-700">Personalized internship matches for students applying to the PM Internship Scheme. Fast, explainable, and secure.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/login" className="px-6 py-3 rounded-full btn-gradient shadow-lg">Get Started</Link>
            <Link href="/about" className="px-6 py-3 rounded-full border">Learn More</Link>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  )
}
