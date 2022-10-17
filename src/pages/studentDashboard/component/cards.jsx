import React from 'react'

export const CardData= ({Room_no, status})=>{
    return(
        <>
        <div className="flex flex-row flex-wrap justify-evenly px-10 py-10 bg-red relative p-4 sm:p-6 drop-shadow-xl rounded-lg ml-5 mr-5" >

{/* Card 1 */}
<div className=" border-l border-r-rose-50 rounded-sm border border-slate-200 overflow-hidden rounded-lg">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            <div className="grow">
              {/* Header */}
              <header className="mb-3">
                <h1 className="text-lg text-slate-800 text-black font-bold">{Room_no}</h1>
              </header>

              <p className="text-slate-800 font-semibold">{status}</p>

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
      <div >
        <hr/>
      </div>
    </div>
        </>
    )
}

const Card = ({name}) => {
  return (
    <div>
      <div className="mt-8 ">
                <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">{name.blockname}</h2>
     </div>
    <CardData/>
    </div>
  )
}

export default Card



