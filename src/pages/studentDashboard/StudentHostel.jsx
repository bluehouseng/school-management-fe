import React, { useState } from 'react';

import StudentSidebar from './StudentSidebar';
import Header from '../../partials/Header';
import StudentAnalytics from './StudentAnalytics';
// import FilterButton from '../../components/DropdownFilter';
// import StudentCard01 from './StudentCard/StudentCard01';
// import StudentCard02 from './StudentCard/StudentCard02';
import StudentHeader from './StudentHeader';

function StudentHostel() {

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

         {/* Title */}
         <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">HOSTEL BOOKING</h1>


            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

             </div>
            </div>
          <div className='mx-4 rounded-md'>
          </div>

          
      </main>

      <React.Fragment>
      <div className="mt-8 ">
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">BLOCK A</h2>
              </div>
  <div className="flex flex-row flex-wrap justify-evenly px-10 py-10 bg-indigo-200 relative p-4 sm:p-6 drop-shadow-xl ">

{/* Card 1 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 1</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>

              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>


{/* Card 2 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
               {/* Header */}
               <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 2</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>

      
{/* Card 3 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
               {/* Header */}
               <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 3</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>


{/* Card 4 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
          {/* Header */}
          <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 4</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  
      <div className="mt-8 ">
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">BLOCK B</h2>
              </div>
  <div className="flex flex-row flex-wrap justify-evenly px-10 py-10 bg-indigo-200 relative p-4 sm:p-6 drop-shadow-xl ">

{/* Card 1 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 1</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>

              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>


{/* Card 2 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
               {/* Header */}
               <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 2</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>

      
{/* Card 3 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
               {/* Header */}
               <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 3</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>


{/* Card 4 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
          {/* Header */}
          <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 4</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="mt-8 ">
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">BLOCK C</h2>
              </div>
  <div className="flex flex-row flex-wrap justify-evenly px-10 py-10 bg-indigo-200 relative p-4 sm:p-6 drop-shadow-xl ">

{/* Card 1 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 1</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>

              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>


{/* Card 2 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
               {/* Header */}
               <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 2</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>

      
{/* Card 3 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
               {/* Header */}
               <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 3</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>


{/* Card 4 */}
<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
          {/* Header */}
          <header className="mb-3">
                <h1 className="text-lg text-slate-800 font-bold">Room 4</h1>
              </header>

              <p className="text-slate-800 font-semibold">Available</p>
              {/* Rating and price */}
              <div className="flex flex-wrap justify-between items-center mb-4">
              </div>
            </div>
            {/* Card footer */}
            <div>
              <a className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Book Now</a>
            </div>
          </div>
        </div>
      </div>

    </div>

      </React.Fragment>
  </div>
  </div>
  );
}

export default StudentHostel;