import React from 'react';
import { MdPayment } from 'react-icons/md';
import { BsFillPatchExclamationFill} from 'react-icons/bs';
import { BsWallet } from 'react-icons/bs';

// import UserImage from '../../../images/user-36-05.jpg';

function StudentCard02() {
  return (
    <div className="col-span-full xl:col-span-4 bg-white shadow-lg rounded-md border border-slate-200 item-center flex flex-col">
      
      
      <div> 

      <div className="bg-cyan-500 rounded-md text-center shadow-md  shadow-emerald-900  ml-3 mb-3 mr-5 py-4 px-1 mt-4">
  <div className="flex items-center h-full">

    <div className='text-blue-900 text-4xl rounded-xl ml-2 font-bold shadow-emerald-900 shadow-md bg-transparent'><MdPayment /></div>
    <div><h3 className="text-lg font-semibold text-slate-800  ml-3">Fees:</h3></div>
  </div>
</div>

<div className="bg-cyan-500 rounded-md text-center ml-3 mr-5 shadow-emerald-900 shadow-md py-4 mb-3 px-1 mt-2">
  <div className="flex items-center h-full">

    <div className='text-blue-900 text-4xl rounded-xl ml-2  font-bold shadow-emerald-900 shadow-md'><BsWallet /></div>
    <div><h3 className="text-lg font-semibold text-slate-800  ml-3">Paid:</h3></div>
  </div>
</div>

<div className="bg-cyan-500 rounded-md text-center shadow-emerald-900 mb-3 ml-3 shadow-md mr-5 py-4 px-1 mt-2">
  <div className="flex items-center h-full">

    <div className='text-blue-900 text-4xl rounded-full rounded-t-full rounded-b-full ml-2 font-bold shadow-emerald-900 shadow-md '><BsFillPatchExclamationFill /></div>
    <div><h3 className="text-lg font-semibold text-slate-800  ml-3">Outstanding:</h3></div>
  </div>
</div>




  




</div>
       
      <div className='flex flex-col justify-center mx-auto px-auto mb-10 mt-20 grid grid-cols-1  '>
           <button className="btn bg-indigo-500   w-96 hover:bg-indigo-600 text-white">PAY HERE</button> 
        </div>
    </div>
  );
}

export default StudentCard02;
