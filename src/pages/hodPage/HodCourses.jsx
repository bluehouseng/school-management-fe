import React, { useState } from 'react';

import HodSidebar from './components/HodSidebar';
import Header from '../../partials/Header';
import HodAnalytics from './components/HodAnalytics';
import HodTable from './components/HodTable';
import HodWelcomeBanner from './components/HodWelcomeBanner';
import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../components/DropdownFilter';
import Datepicker from '../../components/Datepicker';
import DashboardCard01 from '../../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../../partials/dashboard/DashboardCard11';

function HodDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <HodSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <HodWelcomeBanner />

            {/* Dashboard actions */}
            

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="flex items-center justify-between mb-7 ">
                {/* Filter button */}
                {/* <FilterButton align="right" /> */}
                {/* Datepicker built with flatpickr */}

                <h3 className="text-xl leading-snug text-slate-800 font-bold mt-6 mb-5">Course Assignin category</h3>
               
             
                <Datepicker align="right" />
              </div>

            

            {/* Cards */}
            <section>

<div className="grid grid-cols-12 gap-6">
  {/* Card 1 */}
  <div className="col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
    {/* Card content */}
    <div className="flex flex-col h-full p-5">
      <div className="grow">
        <header>
          <h3 className="text-lg text-slate-800 font-semibold mb-1">English</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-rose-500 italic">Not assigned</div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
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
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Mathematics</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-rose-500 italic">Not assigned </div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
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
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Boilogy</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-green-500 italic">Assigned</div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
        </div>
      </footer>
    </div>
  </div>
  <div className="col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
    {/* Card content */}
    <div className="flex flex-col h-full p-5">
      <div className="grow">
        <header>
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Social studies</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-green-500 italic">Assigned</div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 " href="#0">Assign course -&gt;</a>
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
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Mathematics</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-rose-500 italic">Not assigned </div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
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
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Physics</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-rose-500 italic">Not assigned</div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
        </div>
      </footer>
    </div>
  </div>
  <div className="col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
    {/* Card content */}
    <div className="flex flex-col h-full p-5">
      <div className="grow">
        <header>
          <h3 className="text-lg text-slate-800 font-semibold mb-1">English</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-rose-500 italic">Not assigned</div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
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
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Mathematics</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-rose-500 italic">Not assigned </div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
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
          <h3 className="text-lg text-slate-800 font-semibold mb-1">Boilogy</h3>
        </header>
      </div>
      {/* Card footer */}
      <footer className="mt-2">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side */}
          <div className="text-sm text-green-500 italic">Assigned</div>
          {/* Right side */}
          <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Assign course -&gt;</a>
        </div>
      </footer>
    </div>
  </div>
</div>
</section>

          </div>
        </main>

      </div>

    </div>
  );
}

export default HodDashboard;



