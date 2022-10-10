import React from 'react';
import { NavLink } from 'react-router-dom'

function StudentCard01() {
  return (
    <div className="col-span-full xl:col-span-8 px-10 py-10 bg-white   shadow-lg rounded-md border border-slate-200">
      <div className=" flex wrap " > 

        <NavLink to='/student/fees'>
            <div className="bg-slate-100 rounded-md text-center mr-5 py-10 px-10 mt-4">

          <div className="flex flex-col h-full">

            <h3 className="text-lg font-semibold text-slate-800 mb-1">Pay School fees:</h3>
            <div className="text-sm">Please click on the button and follow the instruction to pay school fees</div>
          </div>

        </div>
        </NavLink>
      

        <NavLink to='/student/registration' >
          <div className="bg-slate-100 rounded-md text-center box-border px-10  mr-5 mt-4 mb-4">
            <div className="flex flex-col  py-10 ">

              <h3 className="text-lg font-semibold  text-slate-800 mb-1">Course registration:</h3>
              <div className="text-sm">Please click on the button and follow the instruction to register your courses</div>
            </div>
          </div>
        </NavLink>


        

      </div>
{/* <NavLink className='my-auto' to='/student/registration'>
                        <div className="text-3xl font-bold  mr-2 ">REGISTRATION</div>
                    </NavLink> */}
        <div  className='flex wrap  '>

        <NavLink to='/student/hostel' >
            <div className="bg-slate-100 rounded-md text-center mr-5 py-10 px-10 mt-4">

            <div className="flex flex-col h-full">

              <h3 className="text-lg font-semibold text-slate-800 mb-1">Hostel:</h3>
              <div className="text-sm">Please click on the button and follow the instruction to book hostel</div>
            </div>


          </div>
        </NavLink>
        

        <NavLink to='/student/checkresult'>
<div className="bg-slate-100 rounded-md text-center py-10 px-10 mr-5 mt-4 mb-4">
          <div className="flex flex-col h-full">

            <h3 className="text-lg font-semibold text-slate-800 mb-1">Check result:</h3>
            <div className="text-sm">Please click on the button and follow the instruction to check result</div>
          </div>


        </div>

        </NavLink>
        

      </div>

    </div>
  );
}

export default StudentCard01;
