import React from 'react';

<<<<<<< HEAD
function StudentHeader() {
  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 overflow-hidden mb-8 rounded-lg drop-shadow-xl">
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1 ">Welcome Back 👋</h1>
        {/* <p>Here is what’s happening with your projects today:</p> */}
        <p>Here is an update of your school work:</p>
      </div>
</div>

  )
=======

import studentImage from '../../images/applications-image-01.jpg'
function StudentHeader() {
    return (
        <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
            <div className="relative flex">
                <div>

                <img src={studentImage} className='rounded-full' width='64' height='64' alt="student Image" />
                </div>
                <div>

                <h1 className=" ml-5 text-2xl md:text-3xl text-slate-800 font-bold mb-1">Welcome student 👋</h1>
                <p>Please follow the instruction</p>
                </div>
            </div>

        </div>
    );
>>>>>>> 319ba20d236c0531a4f7f0214db795aa316fe7f3
}

export default StudentHeader;

