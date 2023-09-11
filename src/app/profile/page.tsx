"use client"
import { useTheme } from 'next-themes'
import axios from 'axios'
import { useRouter } from "next/navigation";
import {  useEffect,useState } from 'react';

export default function Profile()
{
  const route = useRouter();
  const [user,setUser] = useState({ _id: '', firstname: '', lastname: '', email: '',createdAt:"",isverified:"",role:{isadmin:true,iseditor:false},updatedAt:""});
 
  async function submit()
  { 
    const responce = await axios.get('/api/users/logout')
    if(responce.status==200){
      route.push('/login')
    }
  }

  useEffect(()=>{ 
    async function getdata()
    {
      const data = await axios.get('/api/users/userinfo');
      console.log(data.data.data);
       setUser({...data.data.data});

      
    }
     getdata();
    
  },[])
  

  return (
    <div>
  <button className='bg-green-500 p-3' onClick={submit}>Logout</button>
      <h1>{user.firstname}</h1>
      <h1>
        Rishabh kumar 
      </h1>
    </div>
  )
}