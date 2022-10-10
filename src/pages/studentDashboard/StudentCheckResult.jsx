import React from 'react';


function StudentRegistration() {
  return (
    <div>
    <div className="col-span-full bg-white shadow-lg rounded-sm border mt-3 border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800 text-2xl">Result for 100 Level</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">id</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Course Code</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Course Title</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Assesment</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Exam score</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Total</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Remark</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Unit</div>
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
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">60</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">70</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">Excellent</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">2</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">2</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    ENG
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>English</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">4</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">20</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">24</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-red-500">Failed</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">3</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">3</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    CRS
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>Christian Studies</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">10</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">50</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">60</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">Very Good</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">2</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">4</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    BEE
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>Building Education</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">20</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">60</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">80</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">Excellent</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">2</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">5</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    CEF
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>Certificate Education</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">15</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">60</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">75</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">Excellent</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">2</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">6</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    BEC
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>Business Education</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">10</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">60</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">70</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">Excellent</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">2</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">7</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    DEC
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div>Degree Education</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">7</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">50</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center">57</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-blue-500">Pass</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">2</div>
                </td>
              </tr>
              {/* Row */}
                 {/* Row */}
                 <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-indigo-500">
                      
                    </div>
                    <div className="font-medium text-slate-800">Total</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex shrink-0 -space-x-3 -ml-px">
                    
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    
                    <div></div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center"></div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center"></div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-lg text-center"></div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500"></div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-emerald-500">14</div>
                </td>
              </tr>
              {/* Row */}
            </tbody>
          </table>


          
        </div>
      </div>
    </div>
    <div className="col-span-full bg-white shadow-lg rounded-sm border mt-4 border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800 text-2xl">Result Overview</h2>
      </header>
      <div className="p-3"></div>
        <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">id</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Course </div>
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
          </div>
  );
}

export default StudentRegistration;
