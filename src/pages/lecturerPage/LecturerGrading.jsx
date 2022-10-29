import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import LecturerSidebar from './LecturerSidebar';
import Header from '../../partials/Header';

import LecturerWelcomeBanner from './components/LecturerWelcomeBanner';
import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';

import Datepicker from '../../components/Datepicker';


function LecturerGrading() {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <LecturerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-8 py-4 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            {/* <LecturerWelcomeBanner /> */}
            <div className='flex justify-between mb-2'>
               <h1 className='text-4xl font-extrabold'>Welcome to John, Grade profile</h1>
               <div>
                 <h2> <span  className='text-black text-xl'>Registration number:</span>  13/3333j/3  </h2> 
<h2> <span className='text-black text-xl'>Department: </span> Computer Science </h2>
               </div>
           
            </div>
            
            <p>Note that whatever score inputed here would be taking as the student score</p>

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-2">

              {/* Left: Avatars */}
           
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
               
                {/* Datepicker built with flatpickr */}
               
                {/* Add view button */}
               
              </div>

            </div>

            {/* Cards */}
            <div className=" flex justify-between ">

{/* <div  className='flex'>
   
                 <form className="relative">
              <label htmlFor="feed-search-desktop" className="sr-only">
                Search
              </label>
              <input id="feed-search-desktop" className="form-input w-full pl-9 focus:border-slate-300" type="search" placeholder="Search…" />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          
              <div className='ml-2' >
               <select id="country" className="form-select">
                    <option>Biology</option>
                    <option>English</option>
                    <option>Mathematics</option>
                  </select> 
              </div>
</div> */}
           
            

           
           
            
            {/* <div  className='flex'>
                 <Datepicker align="right" />

<NavLink end to='/lecturer/profile'>
   <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
                  <span className="hidden xs:block ml-2">View profile -&gt; </span>
                </button>    
</NavLink>

                            
            </div> */}
         


              {/* Line chart (Acme Plus) */}
              {/* <DashboardCard01 /> */}
             
              
            </div>

            <div className='mt-11 flex flex-col'>
                <table className="table-auto w-full rounded-md bg-gray-200">
{/* Table header */}
<thead className="text-xs uppercase text-slate-400  rounded-sm">
  <tr>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left ml-7"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left ml-3"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-center"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-center"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-center"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left mr-7"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left"></div>
    </th>
    <th className="p-2 whitespace-nowrap">
      <h1 className="font-extrabold text-xl text-black text-left">Total</h1>
    </th>
  </tr>
</thead>


{/* Table body */}
<tbody className="text-lg divide-y divide-slate-100">
  {/* Row */}  
  <tr className='my-12'>
    
    
    <td className="whitespace-nowrap">
    </td>

    <td className="p-2 whitespace-nowrap">
      <div className="flex shrink-0 -space-x-3 font-extrabold text-2xl text-black ml-5">
      Assignment:
      </div>
    </td>
    <td className="whitespace-nowrap">
    </td>
    
    <td className="py-2 whitespace-nowrap">
      <div className='my-12'>

      

   <input type="text" className='w-16 h-9  border-r-transparent'/>
     
    <input type="text" className='w-16 h-9  border-r-transparent'/>
         
    <input type="text" className='w-16 h-9  border-r-transparent'/>
 
    <input type="text" className='w-16 h-9  border-r-transparent'/>
    
    <input type="text" className='w-16 h-9 border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9 '/>
</div>
    </td>
    
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium mr-2 ml-2 text-blue-600">100</div> 
    </td>
    
  </tr>
  {/* Row */}
  {/* Row */}
  <tr className='my-12'>
    
    
    <td className="whitespace-nowrap">
    </td>

    <td className="p-2 whitespace-nowrap">
    <div className="flex shrink-0 -space-x-3 font-extrabold text-2xl text-black ml-5">
      Test:
      </div>
    </td>
    <td className="whitespace-nowrap">
    </td>
    
    <td className="py-2 whitespace-nowrap">
      <div className='my-12'>

      

   <input type="text" className='w-16 h-9  border-r-transparent'/>
     
    <input type="text" className='w-16 h-9  border-r-transparent'/>
         
    <input type="text" className='w-16 h-9  border-r-transparent'/>
 
    <input type="text" className='w-16 h-9  border-r-transparent'/>
    
    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  '/>
</div>
    </td>
    
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium mr-2 ml-2 text-blue-600">100</div> 
    </td>
    
  </tr>
  {/* Row */}
  {/* Row */}
  <tr className='my-12 '>
    
    
    <td className="whitespace-nowrap">
    </td>

    <td className="p-2 whitespace-nowrap">
    <div className="flex shrink-0 -space-x-3 font-extrabold text-2xl text-black ml-5">
      Exam:
      </div>
    </td>
    <td className="whitespace-nowrap">
    </td>
    
    <td className="py-2 whitespace-nowrap">
      <div className='my-12'>

      

   <input type="text" className='w-16 h-9 border-r-transparent'/>
     
    <input type="text" className='w-16 h-9  border-r-transparent'/>
         
    <input type="text" className='w-16 h-9  border-r-transparent'/>
 
    <input type="text" className='w-16 h-9  border-r-transparent'/>
    
    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  border-r-transparent'/>

    <input type="text" className='w-16 h-9  '/>
</div>
    </td>
    
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium mr-2 ml-2 text-blue-600">100</div> 
    </td>
    
  </tr>
  {/* Row */}

  <tr className='my-12 bg-slate-100'>
    
    
    <td className="whitespace-nowrap">
    </td>

    <td className="p-2 whitespace-nowrap">
    <div className="flex shrink-0 -space-x-3 font-extrabold text-2xl text-black ml-5">
    
      </div>
    </td>
    <td className="whitespace-nowrap">
    </td>
    
    <td className="py-2 whitespace-nowrap">
      <div className='my-12'>
</div>
    </td>
    
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap">
    </td>
    <td className="whitespace-nowrap text-2xl ">
        Overall 
    </td>
    <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium mr-2 ml-2 text-blue-600">100</div> 
    </td>
    
  </tr>

</tbody>
</table>

<div className='flex justify-end mt-7'>
 <button type='submit' className="btn w-72 bg-indigo-500 hover:bg-indigo-600 text-white">Submit</button>
</div>



</div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default LecturerGrading;

