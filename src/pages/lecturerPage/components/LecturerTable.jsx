import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const LecturerTable = () => {
  const location = useLocation()
  return (
    <div className='mt-11 flex flex-col'><table className="table-auto w-full">
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-7">fullname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left ml-3">Department</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-center">Cousre</div>
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
          <div className="font-semibold text-left">Input Grade</div>
        </th>
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="text-sm divide-y divide-slate-100">
      {/* Row */}
  
      {/* Row */}
     
      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-slate-800">1</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5">
          John smilga
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div>Physics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Agricultural</div>
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
        <td className="p-2 whitespace-nowrap">
          <NavLink end to='/lecturer/grading'>
            <div className="text-left font-medium mr-2 ml-4 text-blue-600">Grade</div>
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
            <div className="font-medium text-slate-800">2</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5">
            Timothy linus
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div>Mathematics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Agricultural</div>
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
          <div className="text-left font-medium text-emerald-500 ml-4">
            View
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <NavLink end to='/lecturer/grading'>
             <div className="text-left font-medium text-blue-600 ml-4">
            Grade
          </div>
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
            <div className="font-medium text-slate-800">3</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5">
            Andrea paloma
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center ml-4">

            <div>English</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Agricultural</div>
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
        <td className="p-2 whitespace-nowrap">
          <NavLink end to='/lecturer/grading'>
<div className="text-left font-medium text-blue-600 ml-4">
          Grade
          </div>
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

export default LecturerTable