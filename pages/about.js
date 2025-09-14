import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function About(){ return (<div className='min-h-screen flex flex-col'><Navbar /><div className='max-w-4xl mx-auto p-8'><div className='card p-6'><h1 className='text-3xl font-bold text-indigo-700'>About</h1><p className='mt-4 text-gray-700'>This is an AI-Based Internship Recommendation Engine for the PM Internship Scheme. The frontend includes a mock-data fallback so the UI remains functional even if the backend is unreachable.</p></div></div><Footer/></div>)}
