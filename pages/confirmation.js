
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Confirmation(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Application Submitted!</h1>
          <p className="mb-6 text-gray-700">Your application has been successfully submitted.</p>
          <Link href="/dashboard" className="px-6 py-3 rounded-full btn-gradient">Back to Dashboard</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
