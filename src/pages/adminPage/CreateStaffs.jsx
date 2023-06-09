import React from 'react'

const CreateStaffs = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px] ">
    <div className="lg:max-w-[640px] lg:mx-auto">

      {/* Cart items */}
      <div className="mb-6 lg:mb-0 bg-grey-300 rounded-md shadow-lg py-12 px-20">
        <header className="mb-6 ">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-2">Welcome Admin ✨</h1>
          <p>To create staff input the details and information of the staff who has been newly recriuted </p>
        </header>
        {/* Billing Information */}
        <div >
          <div className="text-slate-800 font-semibold mb-4">Staff Information</div>
          <form>
            <div className="space-y-4">
              {/* 1st row */}
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-name">
                  Firstname
                  </label>
                  <input id="card-name" className="form-input w-full" type="text" defaultValue="Patrick" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-surname">
                    Lastname
                  </label>
                  <input id="card-surname" className="form-input w-full" type="text" defaultValue="Sullivan" />
                </div>
              </div>
              {/* 2nd row */}
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-address">
                    Address
                  </label>
                  <input id="card-address" className="form-input w-full" type="text" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-city">
                    Town/L.G.A
                  </label>
                  <input id="card-city" className="form-input w-full" type="text" />
                </div>
              </div>
              {/* 3rd row */}
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-state">
                    State
                  </label>
                  <input id="card-state" className="form-input w-full" type="text" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-country">
                    Country <span className="text-rose-500">*</span>
                  </label>
                  <input id="card-state" className="form-input w-full" type="text" />
                </div>
              </div>
              {/* 4th row */}
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-postcode">
                    State of Origin
                  </label>
                  <input id="card-postcode" className="form-input w-full" type="text" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-vat">
                  Place of Birth
                  </label>
                  <input id="card-vat" className="form-input w-full" type="text" />
                </div>
              </div>
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-postcode">
                    Level
                  </label>
                  <input id="card-postcode" className="form-input w-full" type="text" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-vat">
                    Position
                  </label>
                  <input id="card-vat" className="form-input w-full" type="text" />
                </div>
              </div>
              <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-postcode">
                    Faculty
                  </label>
                  <input id="card-postcode" className="form-input w-full" type="text" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-vat">
                    Department
                  </label>
                  <input id="card-vat" className="form-input w-full" type="text" />
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500">
                  Submit data
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Divider */}
        <hr className="my-6 border-t border-slate-200" />
        {/* Billing footer */}
        <div className="bg-white rounded border border-slate-200 p-4">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-2">
            <div className="text-sm">
              Congratulation<span className="font-medium text-slate-800"></span> you have created a staff 🎉
            </div>
            <div className="relative inline-flex text-center px-3 py-1 rounded bg-emerald-500">
              <div
                className="absolute w-3 h-3 rounded-full bg-white left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <div
                className="absolute w-3 h-3 rounded-full bg-white right-0 translate-x-1/2 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <span className="text-sm text-emerald-50 font-medium uppercase">excellent</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default CreateStaffs