import { useEffect, useState } from "react";

export default function App() {
  const [guests,setGuests]= useState(null)
  const [singleGuest, setSingleGuest] = useState(null)


  useEffect(()=>{
    //on component mount, fetch all guests
    
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
    <p>Guest List</p>
    {guests.map((guest)=>(
      <p key={guest.id}>{guest.name}</p>
    ))}
  </>;
}



