import React,{useEffect, useState} from 'react'
import Cards from './components/Cards'
import Data from './account.json'

function AccountantAnalytics() {
    const [data, setData] =useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
       
        setData(Data)

        setLoading(false)
    }, [])


  return (
    
    <div className='w-full py-[10rem] px-4 '>

{
    loading ? <p>loading</p> : 
        data.map((name, index)=>{
           console.log(name);
           return (
<Cards name={name} key={index}  />
            )
        })
        
        }
        
    </div>
  )
}

export default AccountantAnalytics