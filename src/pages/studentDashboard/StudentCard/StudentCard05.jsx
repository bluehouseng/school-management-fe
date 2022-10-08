import React from 'react';
import { NavLink } from 'react-router-dom';




function StudentCard02() {
    return (
        <div className="flex  xl:col-span-4 bg-white shadow-lg rounded-sm border ">
            <div className=" mx-auto my-auto ">
                <div className="flex tems-center my-auto">
                    <NavLink className='my-auto' to='/student/registration'>
                        <div className="text-3xl font-bold  mr-2 ">REGISTRATION</div>
                    </NavLink>
                    <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
                </div>
            </div>

        </div>
    );
}

export default StudentCard02;


