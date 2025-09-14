
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const API = process.env.NEXT_PUBLIC_API_URL || ''

export default function Detail(){
  const router = useRouter()
  const { id } = router.query
  const [item, setItem] = useState(null)

  useEffect(()=>{
    if(!id) return
    if(!API){ 
      const m = {'m1':{'id':'m1','title':'Data Science Intern','company':'Gov Analytics','location':'New Delhi','description':'Work on real-time projects.','skills':['Python','ML']},
                 'm2':{'id':'m2','title':'Web Dev Intern','company':'Digital India','location':'Bengaluru','description':'Build portals.','skills':['HTML','CSS']},
                 'm3':{'id':'m3','title':'AI Research Intern','company':'National AI Lab','location':'Hyderabad','description':'NLP research.','skills':['AI','NLP']}}
      setItem(m[id] || null); return
    }
    fetch(`${API}/api/internship/${id}`).then(r=>r.json()).then(d=>setItem(d)).catch(()=>setItem(null))
  },[id])

  async function handleApply(){
    const applicant = { name: "Demo Student", email: "demo@example.com" }
    try{
      const res = await fetch(`${API}/api/apply`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ id, applicant }) })
      if(res.ok) router.push('/confirmation')
      else alert('Application failed')
    }catch(e){ router.push('/confirmation') }
  }

  if(!item) return (<div><Navbar /><div className="p-8">Loading...</div></div>)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8">
        <div className="card p-6">
          <h1 className="text-3xl font-bold text-indigo-700">{item.title}</h1>
          <p className="text-gray-700">{item.company} — {item.location}</p>
          <p className="mt-4 text-gray-800">{item.description || 'Description not available.'}</p>
          <p className="mt-3 text-sm text-gray-600">Skills: {item.skills ? item.skills.join(', ') : '—'}</p>
          <div className="mt-6 flex gap-4">
            <button onClick={handleApply} className="px-6 py-3 rounded-full btn-gradient">Apply Now</button>
            <button onClick={()=>router.back()} className="px-6 py-3 rounded-full border">Back</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
