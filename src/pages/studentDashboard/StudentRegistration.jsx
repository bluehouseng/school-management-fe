import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StudentSidebar from './StudentSidebar'
import Header from '../../partials/Header';


function StudentRegistration() {

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
          <div className="lg:relative lg:flex">

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
              <div className="lg:max-w-[640px] lg:mx-auto">

                {/* Cart items */}
                <div className="mb-6 lg:mb-0">
                  <div className="mb-3">
                    <div className="flex text-sm font-medium text-slate-400 space-x-2">
                      <span className="text-slate-500">Review</span>
                      <span>-&gt;</span>
                      <span className="text-slate-500">Payment</span>
                      <span>-&gt;</span>
                      <span className="text-indigo-500">Confirm</span>
                    </div>
                  </div>
                  <header className="mb-6">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">Welcome, complete your registration ✨</h1>
                    <p>Please input the appopraite details in each of the space provided below</p>
                  </header>
                  {/* Billing Information */}
                  <div className='border-2 p-4 flex items-center flex-col px-5'>
                    <div className="text-slate-800 font-semibold  mb-4">Student Registration</div>

                    <form className='m-6 '  >
                      <div className="space-y-6">
                        {/* 1st row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-8">
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-name">
                              Name<span className="text-rose-500">*</span>
                            </label>
                            <input id="card-name" className="form-input w-72" type="text" defaultValue="Patrick" />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-surname">
                              Surname<span className="text-rose-500">*</span>
                            </label>
                            <input id="card-surname" className="form-input w-72" type="text" defaultValue="Sullivan" />
                          </div>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="Matric">
                              Matric No<span className="text-rose-500">*</span>
                            </label>
                            <input id="Matric" className="form-input w-72" type="text" />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-city">
                              Town/City<span className="text-rose-500">*</span>
                            </label>
                            <input id="card-city" className="form-input w-72" type="text" />
                          </div>
                        </div>
                        {/* 3rd row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-state">
                              State/Country<span className="text-rose-500">*</span>
                            </label>
                            <input id="card-state" className="form-input w-72" type="text" />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-country">
                              Country <span className="text-rose-500">*</span>
                            </label>
                            <select id="card-country" className="form-select w-full">
                              <option>Nigeria</option>
                              <option>Ghana</option>
                              <option>Cameroon</option>
                            </select>
                          </div>
                        </div>
                        {/* 4th row */}
                        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-postcode">
                              Phone no<span className="text-rose-500">*</span>
                            </label>
                            <input id="card-postcode" className="form-input w-72" type="tel" />
                          </div>
                          <div className="flex-1">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-vat">
                             Next of king<span className="text-rose-500">*</span> 
                            </label>
                            <input id="card-vat" className="form-input w-72" type="text" />
                          </div>
                        </div>
                        <div className="flex-1 text-center">
                            <label className="block text-sm font-medium mb-1" htmlFor="card-vat">
                             About your self:
                            </label>
                            <textarea id="card-vat" className="form-input w-full h-20" type="text" />
                          </div>
                        <div className="text-center">
                          <button type="submit" className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Divider */}
                  <hr className="my-6 border-t border-slate-200" />
                  {/* Billing footer */}
                  
                </div>

              </div>
            </div>

            {/* Sidebar */}
          

          </div>
        </main>

      </div>

    </div>
  );
}

export default StudentRegistration;