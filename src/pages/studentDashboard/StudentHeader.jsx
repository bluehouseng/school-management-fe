import React from 'react';

function StudentHeader({name,title,props}) {
  return (
    <div className="relative bg-slate-200 p-4 sm:p-6 ove{rflow-hidden mb-8 rounded-lg drop-shadow-xl">
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1 ">Welcome Back {name}👋</h1>
        {/* <p>Here is what’s happening with your projects today:</p> */}
        <p>{title}{props}</p>
      </div>
</div>

  )
  }
export default StudentHeader;
