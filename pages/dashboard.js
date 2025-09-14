import {useEffect,useState} from 'react'
const API=process.env.NEXT_PUBLIC_API_URL||''
export default function Dashboard(){
  const [data,setData]=useState([])
  useEffect(()=>{fetch(API+'/api/internships').then(r=>r.json()).then(setData)},[])
  return(<div><h1>Dashboard</h1><ul>{data.map(d=><li key={d.id}>{d.title}</li>)}</ul></div>)
}