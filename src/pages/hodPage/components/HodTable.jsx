import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const HodTable = () => {
  const location = useLocation();
  return (
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
          <div className="font-semibold text-center">unit</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left mr-7">Level</div>
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
          <NavLink end to='/hod/courses'>
 <div className="text-left font-medium mr-7 text-center text-black">Assign role  <div className='border-2 border-b-yellow-900 border-t-transparent border-x-transparent '></div></div>
          </NavLink>
         
        
        </td>
        
      </tr>
      {/* Row */}
      {/* Row */}
      <tr className='py-36 '>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-black">2</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5 text-black">
            Timothy linus
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>Mathematics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Agricultural</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-black rounded-md text-center  ">Arg222</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">4</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-black">100</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500 ml-4">
            View
          </div>
        </td>
        <td className="p-2 whitespace-nowrap ">
          <NavLink end to='/hod/courses'>
<div className="text-left font-medium mr-7 text-center text-black">Assign role  <div className='border-2 border-b-yellow-900 border-t-transparent border-x-transparent '></div></div>
          </NavLink>
          
        
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
            Andrea paloma
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div className='text-black'>English</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center text-black">Agricultural</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-md text-black rounded-md text-center ">Arg222</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">2</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-black">200</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500 ml-4">
          View 
          </div>
        </td>
        <td className="p-2 whitespace-nowrap ">
          <NavLink end to='/hod/courses'>
<div className="text-left font-medium mr-7 text-center text-black">Assign role  <div className='border-2 border-b-yellow-900 border-t-transparent border-x-transparent '></div></div>
          </NavLink>
          
        
        </td>
      </tr>
      {/* Row */}
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
  )
}

export default HodTable