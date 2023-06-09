import React, { useState } from 'react';


import HodSidebar from './components/HodSidebar';
import Header from '../../partials/Header';


function NumberOfLecturers() {
 

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <HodSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            {/* <HodWelcomeBanner /> */}
            {/* Dashboard actions */}
            {/* Cards */}
            <div className="">

              {/* Line chart (Acme Plus) */}
              <div>
                <div className='flex justify-between mb-2'>
               <h1 className='text-4xl font-extrabold'>Welcome...</h1>
               <div>
                 {/* <h2> <span  className='text-black text-xl'>Registration number:</span>  13/3333j/3  </h2> 
<h2> <span className='text-black text-xl'>Department: </span> Computer Science </h2> */}
               </div>
           
            </div>
            
            <p>Take a look at the total list of lecturers in the departments of Mathematics</p> 
              </div>
             
              {/* Line chart (Acme Advanced) */}
              <div className='mt-11 flex flex-col bg-slate-500 p-7 rounded-sm'>
        <table className="table-auto w-full ">
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-gray-200 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-7">fullname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-3">Position</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Course</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Course Code</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">uni</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left mr-7">Level Teaching</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">View Profile</div>
        </th>
        <th className="p-2 whitespace-nowrap">
        
             <div className="font-semibold text-left">Assign course</div>
        
         
        </th>
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="text-sm divide-y divide-slate-100 ">
      {/* Row */}
  
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">1</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          John smilga
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Physics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Agricultural</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">Arg222</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">4</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-black">100</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
        <td className="p-2 whitespace-nowrap ">
         
 <div className="text-left font-medium mr-7 text-center text-black">Assign role  <div className='border-2 border-b-yellow-900 border-t-transparent border-x-transparent '></div></div>
        
         
        
        </td>
        
      </tr>
      {/* Row */}

    
      {/* Row */}
      {/* Row */}

      {/* Row */}
    </tbody>
  </table>

  <div className='flex justify-end mt-7'>
     <button type='submit' className="btn w-72 bg-indigo-500 hover:bg-indigo-600 text-white">Submit</button>
  </div>
 


  </div>
             
              
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default NumberOfLecturers;