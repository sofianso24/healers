import React from 'react'

const SideBar = () => {
  return (

    <nav className="bg-white shadow-lg h-screen fixed top-0 left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
    <ul>
      <li>
        <a href="javascript:void(0)"
          className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
          Dashboard
        </a>
      </li>
    </ul>
    <div className="mt-4">
      <h6 className="text-[#077bff] text-sm font-bold px-4">Information</h6>
      <ul className="space-y-1 mt-2">
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Audience
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Posts
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Schedules
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Promote
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-4">
      <h6 className="text-[#077bff] text-sm font-bold px-4">Income</h6>
      <ul className="space-y-1 mt-2">
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Earnings and taxes
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Refunds
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Declines
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Payouts Details
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-4">
      <h6 className="text-[#077bff] text-sm font-bold px-4">Actions</h6>
      <ul className="space-y-1 mt-2">
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Profile
          </a>
        </li>
        <li>
          <a href="javascript:void(0)"
            className="text-black hover:text-[#077fbb] text-sm block hover:bg-gray-100 rounded px-4 py-2">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default SideBar