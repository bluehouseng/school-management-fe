import React,{ useState } from 'react';
import StudentSidebar from './StudentSidebar';

import Header from '../../partials/Header';

import StudentHeader from './StudentHeader';
import DropdownFull from '../../components/DropdownFull';
import DropdownCos from '../../components/DropdownCos';
import Result from './Result';




function StudentCheckResult() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
     <div className="flex h-screen overflow-hidden">

      <StudentSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

       
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <StudentHeader title={"GPA:"}props={"0.00"} />
        </div>

         {/* Full-width Dropdown */}
         <div className="w-80 ml-7">       
                  <DropdownCos />
                </div>
                <Result />
        </main>
        </div>

     </div>
  );
}

export default StudentCheckResult;
