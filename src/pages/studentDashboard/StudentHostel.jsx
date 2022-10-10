import React from 'react'

const StudentHostel = () => {
  return (
    <div>
        <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">id</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Course</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Tut</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Class of Degree</div>
                </th>
            
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">1</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    Maths
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>Mathematics</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">10</div>
                </td>
                
              </tr>
              {/* Row */}
             
             
            </tbody>
          </table>
    </div>
  )
}

export default StudentHostel