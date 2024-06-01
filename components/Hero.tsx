import React from 'react'

function Hero() {
  return (
    <div>

<div className="relative">
  <div className="absolute inset-0 bottom-32 -z-10 bg-gradient-to-br from-black to-black"></div>

  <header className="text-white shadow">
    <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row sm:items-center">
      <a href="#" className="cursor-pointer whitespace-nowrap font-black">THE FUTUR</a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label className="absolute top-5 right-7 cursor-pointer sm:hidden" >
        <span className="sr-only">Toggle Navigation</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <nav aria-label="Header Navigation" className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
        <ul className="flex flex-col items-center space-y-2 sm:ml-auto sm:flex-row sm:space-y-0">
          <li className="font-bold sm:mr-12"><a href="#">Pricing</a></li>
          <li className="sm:mr-12"><a href="#">Features</a></li>
          <li className="sm:mr-12"><a href="#">Support</a></li>
          <li className="sm:mr-12">
            <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-white hover:text-indigo-600">Login</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div className="mx-auto flex max-w-screen-md flex-col">
    <h1 className="mt-10 text-center text-3xl font-bold text-white sm:mt-20 sm:text-5xl">Your goto faAs</h1>
    <p className="mt-6 text-center text-white">Welcome to faAs, the ultimate solution for seamless and efficient bookkeeping tailored to meet the needs of modern businesses. Whether you're a small business owner, a freelancer, or an accountant, our app is designed to simplify your financial management processes, giving you more time to focus on what you do best—growing your business.</p>
    <div className="abg-white relative mx-auto mt-8 w-full max-w-sm space-y-2 overflow-hidden ring-rose-400 focus-within:ring-2 sm:space-y-0 sm:rounded-full">
      <input className="w-full rounded-full py-2 px-5 text-center outline-none sm:text-left" type="text" placeholder="Enter to email to start free trial" />
      <button className="right-0 w-full rounded-full bg-rose-500 px-8 py-2 text-white sm:absolute sm:w-auto">Free Trial</button>
    </div> 
  </div>
  <img className="mx-auto mt-16 w-full max-w-screen-lg rounded-xl shadow-lg shadow-indigo-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="" />
</div>

    </div>
  )
}

export default Hero