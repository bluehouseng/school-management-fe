import React, { useState } from 'react';

import LecturerSidebar from './LecturerSidebar';
import Header from '../../partials/Header';
import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../components/DropdownFilter';
import Datepicker from '../../components/Datepicker';
import LecturerTable from './components/LecturerTable';
// import LecturerDropdown from './components/LecturerDropdown'
// import DashboardCard01 from '../../partials/dashboard/DashboardCard01';
// import DashboardCard02 from '../../partials/dashboard/DashboardCard02';
// import DashboardCard03 from '../../partials/dashboard/DashboardCard03';
// import DashboardCard04 from '../../partials/dashboard/DashboardCard04';
// import DashboardCard05 from '../../partials/dashboard/DashboardCard05';
// import DashboardCard06 from '../../partials/dashboard/DashboardCard06';
// import DashboardCard07 from '../../partials/dashboard/DashboardCard07';
// import DashboardCard08 from '../../partials/dashboard/DashboardCard08';
// import DashboardCard09 from '../../partials/dashboard/DashboardCard09';
// import DashboardCard10 from '../../partials/dashboard/DashboardCard10';
// import DashboardCard11 from '../../partials/dashboard/DashboardCard11';

function LecturerDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <LecturerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker built with flatpickr */}
               
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
            <div className=" flex justify-between ">

              <div >
               <select id="country" className="form-select">
                    <option>Italy</option>
                    <option>USA</option>
                    <option>United Kingdom</option>
                  </select> 
              </div>
            

            <div >
                 <form className="relative">
              <label htmlFor="feed-search-desktop" className="sr-only">
                Search
              </label>
              <input id="feed-search-desktop" className="form-input w-full pl-9 focus:border-slate-300" type="search" placeholder="Search…" />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            </div>
           
            
            <div >
                 <Datepicker align="right" />
            </div>
         


              {/* Line chart (Acme Plus) */}
              {/* <DashboardCard01 /> */}
             
              
            </div>

            <LecturerTable />

          </div>
        </main>

      </div>

    </div>
  );
}

export default LecturerDashboard;