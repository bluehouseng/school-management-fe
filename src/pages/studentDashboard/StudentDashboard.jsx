import React, { useState } from 'react';

import StudentSidebar from './StudentSidebar';
import Header from '../../partials/Header';
import StudentAnalytics from './StudentAnalytics';
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
// import DashboardCard07 from '../../partials/dashboard/DashboardCard07';cdcdcdcd
// import DashboardCard08 from '../../partials/dashboard/DashboardCard08';
// import DashboardCard09 from '../../partials/dashboard/DashboardCard09';
// import DashboardCard10 from '../../partials/dashboard/DashboardCard10';
// import DashboardCard11 from '../../partials/dashboard/DashboardCard11';

function StudentDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

     
      <StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

   
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

       
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <StudentHeader />
            <StudentAnalytics/>
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-8 ">

              {/* Line chart (Acme Plus) */}
              <StudentCard01 />
              {/* Line chart (Acme Advanced) */}
              <StudentCard02 />
           
            </div>

          </div>
           <div className='mx-4 rounded-md'>
            <table className="table table-hover shadow-xl table-bordered rounded-md">
  {/* <thead className='table-secondary rounded-lg'>
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
  </tbody> */}

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
                  <div className="font-semibold text-left">Transaction</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Session</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Paid for</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Amount</div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </table>
    </div>
    </main>
</div>
</div>
  );
}

export default StudentDashboard;