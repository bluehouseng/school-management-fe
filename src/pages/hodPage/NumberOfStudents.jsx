import React, { useState } from 'react';


import HodSidebar from './components/HodSidebar';
import Header from '../../partials/Header';


function NumberOfStudents() {
 

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
            
            <p>Take a look at the total list of student in the departments of Mathematics</p> 
              </div>
             


              {/* Line chart (Acme Advanced) */}
              <div className='overflow-x-auto mt-11 flex flex-col bg-slate-500 p-7 rounded-sm'> 
                <h1 className='text-black text-xl mb-4'>100 Level </h1> 
        <table className="table-auto w-full ">
     
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-gray-200 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-7">Firstname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-3">Lastname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Department</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Matric number</div>
        </th>
        
      
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">View Profile</div>
        </th>
       
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="text-sm divide-y divide-slate-100 ">
      {/* Row */}
  
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
          John 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smilga</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">1243345/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">2</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Chris
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Philip</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3444335/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">3</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Andrew 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smith</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3272325/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
    </tbody>
  </table>

  
 


  </div>

          {/* Line chart (Acme Advanced) */}
          <div className='overflow-x-auto mt-11 flex flex-col bg-slate-500 p-7 rounded-sm'> 
                <h1 className='text-black text-xl mb-4'>200 Level </h1> 
        <table className="table-auto w-full ">
     
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-gray-200 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-7">Firstname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-3">Lastname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Department</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Matric number</div>
        </th>
        
      
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">View Profile</div>
        </th>
       
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="text-sm divide-y divide-slate-100 ">
      {/* Row */}
  
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
          John 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smilga</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">1243345/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">2</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Chris
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Philip</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3444335/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">3</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Andrew 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smith</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3272325/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
    </tbody>
  </table>

  
 


  </div>

          {/* Line chart (Acme Advanced) */}
          <div className='overflow-x-auto mt-11 flex flex-col bg-slate-500 p-7 rounded-sm'> 
                <h1 className='text-black text-xl mb-4'>300 Level </h1> 
        <table className="table-auto w-full ">
     
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-gray-200 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-7">Firstname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-3">Lastname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Department</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Matric number</div>
        </th>
        
      
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">View Profile</div>
        </th>
       
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="text-sm divide-y divide-slate-100 ">
      {/* Row */}
  
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
          John 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smilga</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">1243345/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">2</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Chris
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Philip</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3444335/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">3</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Andrew 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smith</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3272325/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
    </tbody>
  </table>

  
 


  </div>
          {/* Line chart (Acme Advanced) */}
          <div className='overflow-x-auto mt-11 flex flex-col bg-slate-500 p-7 rounded-sm'> 
                <h1 className='text-black text-xl mb-4'>400 Level </h1> 
        <table className="table-auto w-full ">
     
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-gray-200 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-7">Firstname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-3">Lastname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Department</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Matric number</div>
        </th>
        
      
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">View Profile</div>
        </th>
       
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="text-sm divide-y divide-slate-100 ">
      {/* Row */}
  
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
          John 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smilga</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">1243345/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">2</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Chris
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Philip</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3444335/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">3</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
          Andrew 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Smith</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Mathematics</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center ">3272325/u7</div>
        </td>
        
       
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-4 text-emerald-500">View</div>
        </td>
  
        
      </tr>
      {/* Row */}
      {/* Row */}
    </tbody>
  </table>

  
 


  </div>
             
              
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default NumberOfStudents;