
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

const MOCK = [
  {"id":"m1","title":"Data Science Intern","company":"Gov Analytics","location":"New Delhi","skills":["Python","Machine Learning","Data Analysis"]},
  {"id":"m2","title":"Web Development Intern","company":"Digital India Solutions","location":"Bengaluru","skills":["HTML","CSS","React"]},
  {"id":"m3","title":"AI Research Intern","company":"National AI Lab","location":"Hyderabad","skills":["AI","NLP","Deep Learning"]}
]

const API = process.env.NEXT_PUBLIC_API_URL || ''

export default function Dashboard(){
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [q, setQ] = useState('')

  useEffect(()=>{
    let mounted = true
    if(!API){
      setItems(MOCK); setFiltered(MOCK); return
    }
    fetch(`${API}/api/internships`).then(r=>{
      if(!r.ok) throw new Error('bad')
      return r.json()
    }).then(data=>{ if(mounted){ setItems(data); setFiltered(data) }}).catch(err=>{ setItems(MOCK); setFiltered(MOCK) })
    return ()=>{ mounted=false }
  },[])

  useEffect(()=>{
    const s = q.trim().toLowerCase()
    if(!s){ setFiltered(items); return }
    const res = items.filter(it=>{
      return it.title.toLowerCase().includes(s) || it.company.toLowerCase().includes(s) || it.location.toLowerCase().includes(s) || (it.skills && it.skills.join(' ').toLowerCase().includes(s))
    })
    setFiltered(res)
  },[q, items])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Recommended Internships</h1>
        <div className="flex gap-4 mb-6 items-center">
          <div className="flex items-center bg-white p-2 rounded-full shadow-sm w-full max-w-md card">
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 12.65z"></path></svg>
            <input value={q} onChange={e=>setQ(e.target.value)} className="w-full p-3 bg-transparent border-0 outline-none" placeholder="Search by title, company, skill or location..." />
          </div>
          <button onClick={()=>setQ('')} className="px-4 py-2 rounded-full border">Clear</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(it=>(
            <div key={it.id} className="p-5 card">
              <h3 className="text-xl font-semibold text-indigo-700">{it.title}</h3>
              <p className="text-gray-700">{it.company} — {it.location}</p>
              <p className="text-sm mt-2 text-gray-600">Skills: {it.skills ? it.skills.join(', ') : '—'}</p>
              <div className="mt-4 flex gap-2">
                <Link href={`/internship/${it.id}`} className="px-4 py-2 rounded-full btn-gradient">View Details</Link>
                <button className="px-4 py-2 rounded-full border">Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
