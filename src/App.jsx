import { useEffect, useState } from "react";
import RenderGuest from "./components/RenderGuest";
import RemoveGuest from "./components/RemoveGuest";
import './index.css'

export default function App() {
  const [guests,setGuests]= useState(null)
  const [singleGuest, setSingleGuest] = useState(null)


  useEffect(()=>{
    
    const fetchData = async ()=>{
    try{
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2511-FTB-CT-WEB-PT/guests')
    if (!response.ok)throw new Error('Failed to fetch')
    
    const result = await response.json()
    setGuests(result.data)
   
  } catch(err){
    console.error(err)
  }
}
  fetchData()



//runs once (empty dependency array)
  },[])


  if (!guests || guests.length === 0) return <p>Loading...</p>;


  



  return <>
    <h1>Guest List</h1>
    {guests.map((guest)=>(
      <p key={guest.id} onClick={(()=>setSingleGuest(guest))}>{guest.name} | {guest.email}</p>
    ))}
  
  <div className="information">
    {singleGuest && <RenderGuest name = {singleGuest.name} bio = {singleGuest.bio} job = {singleGuest.name} email = {singleGuest.email}/>}

    {singleGuest && <RemoveGuest setSingleGuest={setSingleGuest}/>}

    {!singleGuest && <p>Make a selection, make a new friend!</p>}
    
  </div>
  </>;
}



