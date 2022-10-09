import React, { useState } from 'react';

import StudentSidebar from './StudentSidebar';
import Header from '../../partials/Header';
// import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../components/DropdownFilter';
import Datepicker from '../../components/Datepicker';
import StudentCard01 from './StudentCard/StudentCard01';
import StudentCard02 from './StudentCard/StudentCard02';
// import StudentCard03 from './StudentCard/StudentCard03';
// import StudentCard04 from './StudentCard/StudentCard04';
// import StudentCard05 from './StudentCard/StudentCard05';
import StudentHeader from './StudentHeader';
// import DashboardCard06 from '../../partials/dashboard/DashboardCard06';
// import DashboardCard07 from '../../partials/dashboard/DashboardCard07';
// import DashboardCard08 from '../../partials/dashboard/DashboardCard08';
// import DashboardCard09 from '../../partials/dashboard/DashboardCard09';
// import DashboardCard10 from '../../partials/dashboard/DashboardCard10';
// import DashboardCard11 from '../../partials/dashboard/DashboardCard11';

function StudentDashboard() {

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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <StudentHeader />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add View</span>
                </button>                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-8 ">

              {/* Line chart (Acme Plus) */}
              <StudentCard01 />
              {/* Line chart (Acme Advanced) */}
              <StudentCard02 />
              {/* Line chart (Acme Professional) */}
              {/* <StudentCard03 /> */}
              {/* Bar chart (Direct vs Indirect) */}
              {/* <StudentCard04 /> */}
              {/* Line chart (Real Time Value) */}
              {/* <StudentCard05 /> */}
              {/* Doughnut chart (Top Countries)
              <DashboardCard06 />
              Table (Top Channels)
              <DashboardCard07 />
              Line chart (Sales Over Time)
              <DashboardCard08 />
              Stacked bar chart (Sales VS Refunds)
              <DashboardCard09 />
              Card (Recent Activity)
              <DashboardCard10 />
              Card (Income/Expenses)
              <DashboardCard11 />
               */}
            </div>

          </div>
           <div className='mx-4 rounded-md'>
            <table className="table table-hover shadow-xl table-bordered rounded-md">
  <thead className='table-secondary rounded-lg'>
    <tr>
      <th colspan="0.5" scope="col">id</th>
      <th colspan="2" scope="col">Transaction</th>
      <th colspan="2" scope="col">Session</th>
      <th colspan="2" scope="col">Status</th>
      <th colspan="2" scope="col">Paid for</th>
      <th colspan="2" scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colspan="2"></td>
      <td colspan="2"></td>
      <td colspan="2"></td>
      <td colspan="2"></td>
      <td colspan="2"></td>
    </tr>

  </tbody>
</table>
        </div>
        </main>
       
      
      </div>

    </div>
  );
}

export default StudentDashboard;