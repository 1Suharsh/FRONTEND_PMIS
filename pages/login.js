
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login(){
  const router = useRouter()
  function handleSubmit(e){
    e.preventDefault()
    router.push('/dashboard')
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-md mx-auto p-6 mt-16">
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input required className="search-input mt-1 w-full p-3 rounded-md border" type="email" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <input required className="mt-1 w-full p-3 rounded-md border" type="password" />
            </div>
            <button className="w-full py-3 rounded-full btn-gradient">Login</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
