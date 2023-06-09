import React, { useState } from 'react';

import StudentSidebar from './StudentSidebar';
import Header from '../../partials/Header';
import Card from './component/cards'
import blocks from '../../utils/blocks'
import StudentAnalytics from './StudentAnalytics';
// import FilterButton from '../../components/DropdownFilter';
// import StudentCard01 from './StudentCard/StudentCard01';
// import StudentCard02 from './StudentCard/StudentCard02';
import StudentHeader from './StudentHeader';
import { useEffect } from 'react';


function StudentHostel() {
  const [data, setData] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    setData(blocks)
  }, [])

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Title */}
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">HOSTEL BOOKING</h1>


            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

            </div>
          </div>
          <div className='mx-4 rounded-md'>
          </div>
        </main>

        <div className='flex ' style={{ flexDirection: 'column' }}>
          {
            data.map((item, idx) => {
              console.log(item)
              console.log(item.roomData)
              let roomData = item.roomData
              return (
                <Card key={idx} roomsArr={roomData} name={item} />
              )
            })
          }
        </div>
      </div>

    </div>

  );

}

export default StudentHostel;

