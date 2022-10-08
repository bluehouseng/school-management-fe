import React from 'react';
import { NavLink } from 'react-router-dom';




function StudentCard01() {
  return (
    <div className="flex  xl:col-span-4 bg-white shadow-lg rounded-sm border ">
      <div className=" mx-auto my-auto ">
        <div className="flex tems-center my-auto">
            <NavLink className='my-auto' to='/student/courses'>
   <div className="text-3xl font-bold  mr-2 ">COURSES</div>
            </NavLink>
        </div>
      </div>
   
    </div>
  );
}

export default StudentCard01;
