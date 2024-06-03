import React from 'react'

function Hero() {
  return (
    <div>

<div className="relative">
  <div className="absolute inset-0 bottom-32 -z-10 bg-gradient-to-br from-black to-black"></div>
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