import React from 'react'

const LecturerTable = () => {
  return (
    <div className='mt-11 flex flex-col'><table className="table-auto w-full">
    {/* Table header */}
    <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
      <tr>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">id</div>
        </th>
        <th className="p-2 whitespace-nowrap ml-14">
          <div className="font-semibold text-left  ml-12 ">fullname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">Department</div>
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
          <div className="font-semibold text-left">Level</div>
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
          Gabriel chris andre
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div>Physics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Maths</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-white rounded-md text-center text-black">mth</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">4</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 ">100</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-3 text-emerald-500">View</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-2 ml-3 text-emerald-500">Grade</div>
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
          John chris titus
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div>Mathematics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">English</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-white rounded-md text-center text-black ">eng</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">4</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 ">100</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500 ml-3">
           View
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500 ml-3">
           Grade
          </div>
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
            John chris andre
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div>English</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Biology</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-md text-white rounded-md text-center text-black">bio</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">2</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 ">200</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500 ml-3">
           View
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500 ml-3">
           Grade
          </div>
        </td>
      </tr>
      {/* Row */}
    

      {/* Row */}
      <tr>
        <td className="whitespace-nowrap">
          <div className="flex items-center">
            <div className="shrink-0 rounded-full mr-3 sm:mr-3 bg-indigo-500">

            </div>
            <div className="font-medium text-slate-800"></div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex shrink-0 -space-x-3 ml-5">
            Total
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div></div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center"></div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-md text-white rounded-md text-center bg-rose-400"></div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center"></div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-emerald-500"></div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">
            
          </div>
        </td>
      </tr>
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