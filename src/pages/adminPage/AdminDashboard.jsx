import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import AdminSidebar from './components/AdminSidebar';
import Header from '../../partials/Header';
import SettingsSidebar from '../../partials/settings/SettingsSidebar';
import AppsPanel from '../../partials/settings/AppsPanel';

function AdminDashboard() {
  const location = useLocation()

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='bg-gray-400 py-16'>
            <div className=" ml-4 mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-100 font-bold">Welcome to the Admin ✨</h1>
            </div>

            <section>
          {/* <h3 className="text-xl leading-snug text-slate-800 font-bold mt-6 mb-5">Trending Categories</h3> */}
          <div className="grid grid-cols-12 gap-6 mx-7">
            {/* Card 1 */}
            <div className="col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header>
                    <h3 className="text-lg text-slate-800 font-semibold mb-1">Total staff</h3>
                  </header>
                </div>
                {/* Card footer */}
                <footer className="mt-2">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="text-sm text-slate-500 italic">50 staffs</div>
                    {/* Right side */}
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">10 department</a>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header>
                    <h3 className="text-lg text-slate-800 font-semibold mb-1">Total student</h3>
                  </header>
                </div>
                {/* Card footer */}
                <footer className="mt-2">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="text-sm text-slate-500 italic">500 students</div>
                    {/* Right side */}
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">6million paid</a>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header>
                    <h3 className="text-lg text-slate-800 font-semibold mb-1">Date</h3>
                  </header>
                </div>
                {/* Card footer */}
                <footer className="mt-2">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="text-sm text-slate-500 italic">2022/2023 session</div>
                    {/* Right side */}
                    <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">50 years</a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>

</div>
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
      
            {/* Content */}
            <div className="b rounded-sm mb-8">
              <div className="flex flex-col md:-mr-px">
               
<h3 className="text-xl leading-snug text-slate-800 font-bold mt-6 mb-5"></h3>

               {/* Card start here */}
               {/* Card start here */}
               {/* Card start here */}
<section className='flex'>
              <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 mr-4 mb-4">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-slate-800 font-semibold">Create Staff</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400">
                        
                        {/* <div className="text-sm text-slate-500">4K+</div> */}
                      </div>
                      <div className="flex items-center text-amber-500">
                      <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                    
                       <span>Delete Card</span>
                    

                   </button>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     

                     <NavLink end to='/create/staff'>
<span>Click to create -&gt;</span>
                     </NavLink>
                      
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card */}
            {/* Card */}
            {/* Card */}

               {/* Card start here */}
               {/* Card start here */}
               {/* Card start here */}

               <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 mr-4 mb-4">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-slate-800 font-semibold">Assign role</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400">
                        
                        {/* <div className="text-sm text-slate-500">4K+</div> */}
                      </div>
                      <div className="flex items-center text-amber-500">
                      <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                     <span>Delete Card</span>
                   </button>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                      <span>Click to create -&gt;</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card */}
            {/* Card */}
            {/* Card */}
   {/* Card start here */}
               {/* Card start here */}
               {/* Card start here */}

               <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 mr-4 mb-4">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-slate-800 font-semibold">Create news</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400">
                        
                        {/* <div className="text-sm text-slate-500">4K+</div> */}
                      </div>
                      <div className="flex items-center text-amber-500">
                      <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                     <span>Delete Card</span>
                   </button>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                      <span>Click to create -&gt;</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            </section>
            {/* Card */}
            {/* Card */}
            {/* Card */}
   {/* Card start here */}
               {/* Card start here */}
               {/* Card start here */}
               <section className='flex'>
              <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 mr-4 mb-4">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-slate-800 font-semibold">View profile</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400">
                        
                        {/* <div className="text-sm text-slate-500">4K+</div> */}
                      </div>
                      <div className="flex items-center text-amber-500">
                      <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                     <span>Delete Card</span>
                   </button>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                      <span>Click to create -&gt;</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card */}
            {/* Card */}
            {/* Card */}

               {/* Card start here */}
               {/* Card start here */}
               {/* Card start here */}

               <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 mr-4 mb-4">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-slate-800 font-semibold">Approve result</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400">
                        
                        {/* <div className="text-sm text-slate-500">4K+</div> */}
                      </div>
                      <div className="flex items-center text-amber-500">
                      <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                     <span>Delete Card</span>
                   </button>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                      <span>Click to create -&gt;</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            {/* Card */}
            {/* Card */}
            {/* Card */}
   {/* Card start here */}
               {/* Card start here */}
               {/* Card start here */}

               <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200 mr-4 mb-4">
              {/* Card content */}
              <div className="flex flex-col h-full p-5">
                <div className="grow">
                  <header className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
                        <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-slate-800 font-semibold">Approve payment</h3>
                  </header>
                  <div className="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
                </div>
                {/* Card footer */}
                <footer className="mt-4">
                  <div className="flex flex-wrap justify-between items-center">
                    {/* Left side */}
                    <div className="flex space-x-3">
                      <div className="flex items-center text-slate-400">
                        
                        {/* <div className="text-sm text-slate-500">4K+</div> */}
                      </div>
                      <div className="flex items-center text-amber-500">
                      <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                     <span>Delete Card</span>
                   </button>
                      </div>
                    </div>
                    {/* Right side */}
                    <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                     
                      <span>Click to create -&gt;</span>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
            </section>
            {/* Card */}
            {/* Card */}
            {/* Card */}

            {/* Card */}
            {/* Card */}
            {/* Card */}

              </div>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;