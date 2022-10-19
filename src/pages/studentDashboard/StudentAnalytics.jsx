import React from 'react'

const StudentAnalytics = () => {
  return (  
    <div className="flex flex-row flex-wrap justify-evenly px-10 py-10 rounded-lg ">
        
        <div className=" bg-slate-200 px-5 py-5 rounded-lg drop-shadow-xl ">
             <p>Total No. of Courses</p>
            <p className='font-bold text-2x0.5'> 20</p>
        </div>
        <div className="bg-slate-200 px-5 py-5 rounded-lg   ">
            <p>Current CGPA</p>
            <p className='font-bold text-2x0.5'> 3.58</p>
        </div>
        <div className="bg-slate-200 px-5 py-5 rounded-lg  ">
            <p>Total No. of CO</p>
            <p className='font-bold text-2x0.5'>0</p>
        </div>
        <div className="bg-slate-200 px-5 py-5 rounded-lg ">
            <p>Available Hostels</p>
            <p className='font-bold text-2x0.5'>200 Rooms</p>
        </div>
        <div className="bg-slate-200 px-5 py-5 rounded-lg ">
            <p>Current level</p>
            <p className='font-bold text-2x0.5'>300 level</p>
        </div>
    </div>
  )
}

export default StudentAnalytics

