import React from 'react'

function Navbar() {
  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow" style={{ marginLeft: '10px' }}>
        <a
          href="#Home"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-9  "
        >
          Home
        </a>
        <a
          href="#About"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-9"
        >
          Our Motive
        </a>
        <a
          href="#services"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-9"
        >
          Services
        </a>
      </div>
    </div>
  )
}

export default Navbar
