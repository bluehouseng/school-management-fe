import React, { useState } from 'react';

import StudentSidebar from './StudentSidebar';
import Header from '../../partials/Header';
import DeleteButton from '../../partials/actions/DeleteButton';
import DateSelect from '../../components/DateSelect';
import FilterButton from '../../components/DropdownFilter';
import OrdersTable from '../../partials/orders/OrdersTable';
import PaginationClassic from '../../components/PaginationClassic';

function StudentRegistration() {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div>
            <div className="col-span-full bg-white shadow-lg rounded-sm border mt-3 border-slate-200">
              <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800 text-2xl">Welcome John, <div> please select the courses to register</div></h2>
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
                          <div className="font-semibold text-center">Lecturer</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Status</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">unit</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">type</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">select course</div>
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm divide-y divide-slate-100">
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
                          <div className="text-md text-white rounded-md text-center bg-rose-400">Prerequisite</div>
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
                            <div className="font-medium text-slate-800">2</div>
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
                          <div className="text-md text-white rounded-md text-center bg-green-400">Null</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" mx-14 text-lg text-center">4</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium mr-3 text-emerald-500">Elective</div>
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
                          <div className="text-md text-white rounded-md text-center bg-rose-400">Prerequisite</div>
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
                            <div className="font-medium text-slate-800">4</div>
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
                            <div className="font-medium text-slate-800">5</div>
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
                          <div className="mx-14 text-md text-center">Mr Collins</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-md text-white rounded-md text-center bg-rose-400">Prerequisite</div>
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
                            <div className="font-medium text-slate-800">6</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex shrink-0 -space-x-3 ml-5">
                            Scs
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">

                            <div>Science</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="mx-14 text-md text-center">Mr Mallum</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-md text-white rounded-md text-center bg-green-400">Null</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" mx-14 text-lg text-center">1</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium mr-3 text-emerald-500 ">Elective</div>
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
                            <div className="font-medium text-slate-800">7</div>
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
                          <div className="text-md text-white rounded-md text-center bg-rose-400">Prerequisite</div>
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
                            <div className="font-medium text-slate-800">8</div>
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
                          <div className="text-md text-white rounded-md text-center bg-green-400">Null</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" mx-14 text-lg text-center">4</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium mr-3 text-emerald-500">Elective</div>
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
                            <div className="font-medium text-slate-800">9</div>
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
                          <div className="text-md text-white rounded-md text-center bg-rose-400">Prerequisite</div>
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
                            <div className="font-medium text-slate-800">10</div>
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
                            <div className="font-medium text-slate-800">11</div>
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
                          <div className="mx-14 text-md text-center">Mr Collins</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-md text-white rounded-md text-center bg-rose-400">Prerequisite</div>
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
                            <div className="font-medium text-slate-800">12</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex shrink-0 -space-x-3 ml-5">
                            Scs
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">

                            <div>Science</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="mx-14 text-md text-center">Mr Mallum</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-md text-white rounded-md text-center bg-green-400">Null</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className=" mx-14 text-lg text-center">1</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium mr-3 text-emerald-500 ">Elective</div>
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
                    <div className='flex justify-end mt-15 w-full'> <button type='submit' className="btn w-full flex-end  bg-indigo-500 hover:bg-indigo-600 text-white">Submit</button></div>

                  </table>



                </div>
              </div>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default StudentRegistration;