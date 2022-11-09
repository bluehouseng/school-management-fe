import React, { useState } from 'react';


import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import HodAnalytics from '../hodPage/components/HodAnalytics';
import HodTable from '../hodPage/components/HodTable';
import HodWelcomeBanner from '../hodPage/components/HodWelcomeBanner';

import Datepicker from '../../components/Datepicker';


function RegistrarDashboard() {
 

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <HodWelcomeBanner />

           

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max  sm:justify-between gap-2">
                {/* Filter button */}
               
                <Datepicker align="right" />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <span className="hidden xs:block ml-2">View profile -&gt;</span>
                </button>                
              </div>

            

            {/* Cards */}
            <div className="">

              {/* Line chart (Acme Plus) */}
              <HodAnalytics />

              {/* Line chart (Acme Advanced) */}
             <HodTable />
              
              
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default RegistrarDashboard;