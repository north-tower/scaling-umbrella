import React from 'react'

function page() {
  return (
    <div className="bg-black">
        <div className="font-sans text-base text-white sm:px-10 bg-black">
            <div className="text-base text-white">
                <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
                    <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">Contact us</h1>
                    <div className="text-lg sm:text-xl xl:text-xl">
                    <div className="text-white">
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
    <form className="mx-auto w-full max-w-xl border-gray-800 px-10 py-8 md:px-8">
      <div className="mb-4"><label className="text mb-2 block font-medium text-white" >Your e-mail:</label>
      <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="email" type="email"  /></div>
      <div className="mb-4"><label className="text mb-2 block font-medium text-white" >Subject:</label>
      <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="subject" type="subject"  /></div>
      <div className="mb-4"><label className="text mb-2 block font-medium text-white">Message:</label>
      <textarea className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="message" ></textarea></div>
      <div className="flex items-center">
        <div className="flex-1"></div>
        <button className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</button>
      </div>
    </form>
    <div className="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
      <div className="">
        <p className="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
        <p className="mb-4">Monday – Thursday: 08:00 – 16:00</p>
        <p className="mb-4">Friday: 08:00 - 15:00</p>
        <p className="mb-4">Weekend: Closed</p>
        <p className="mb-4">
          Email:
          <a href="#" className="font-semibold underline">support@apps.io</a>
        </p>
        <p className="mb-4">
          Phone:
          <a href="#" className="font-semibold underline">+46 (0) 10-32 32 322</a>
        </p>
        <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
        <p className="mb-4">Org.no: 63452-2832</p>
        <p className="mb-4">VAT no: 32353</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default page