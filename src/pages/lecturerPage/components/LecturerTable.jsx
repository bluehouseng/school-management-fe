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
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">fullname</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">Department</div>
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
          <div className="font-semibold text-left">Level</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left">View Profil</div>
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
            Phy
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div>Physics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Mr Dung</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-white rounded-md text-center bg-green-400">Null</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">4</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-emerald-500">100</div>
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
            Maths
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div>Mathematics</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Mr John</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-sm text-white rounded-md text-center bg-rose-400">Prerequisite</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">4</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-rose-500">composary</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">
            <input type="checkbox" className='rounded-md text-center ml-11' />
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
            Eng
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">

            <div>English</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="mx-14 text-md text-center">Mr Tabnan</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-md text-white rounded-md text-center bg-blue-500">Non prerequisite</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className=" mx-14 text-lg text-center">2</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-rose-500">composary</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">
            <input type="checkbox" className='rounded-md text-center ml-11' />
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
          <div className=" mx-14 text-lg text-center">30 unit</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium mr-3 text-emerald-500"></div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-emerald-500">
            Selected 5
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