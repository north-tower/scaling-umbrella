import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <section className="w-screen bg-black py-10 text-white">
  <div className="container mx-auto w-full max-w-screen-xl">
    <div className="w-full"> 
      <h2 className="text-center text-3xl font-extrabold">Financial Forecasting</h2>
      <p className="mx-auto mb-4 max-w-xl py-2 text-center text-gray-600 sm:text-lg">How does financial forecasting work.</p>
    </div>
    <div  className="bg-black mx-auto py-10 grid max-w-screen-xl grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
  <div  className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
    <h1  className="mb-6 text-4xl">How it works..</h1> 
    <p  className="text-gray-400">These steps ensure a structured approach to financial forecasting, providing valuable insights to support strategic decision-making and business planning.</p>
  </div>
  <div  className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-gray-600 p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
      <div  className=""> 
        <h3  className="text-xl font-semibold">Data Collection and Analysis</h3>
        <p  className="text-gray-400 mt-3">Comprehensive historical financial data, including sales figures, expenses, and cash flow statements, is gathered. In-depth analysis uncovers critical trends and patterns influencing the business's financial performance. 
          This foundational step ensures forecasts are based on accurate and relevant data, providing a solid basis for future projections..</p>
      </div> 
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
      <div  className="">
        <h3  className="text-xl font-semibold">Developing Forecasting Models</h3>
        <p  className="text-gray-400 mt-3">Suitable forecasting methods, such as time series analysis, regression analysis, or advanced financial modeling techniques, are selected. Forecasting models are constructed and refined based on robust historical data and pertinent external factors. The choice and customization of models are crucial, as they directly impact the accuracy and reliability of the forecasts.</p>
      </div>
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
      <div  className="">
        <h3  className="text-xl font-semibold">Forecast Generation</h3>
        <p  className="text-gray-400 mt-3">Precise short-term and long-term financial forecasts are generated using validated models and predictive analytics. Scenario analysis is implemented to evaluate potential outcomes across diverse economic scenarios or strategic initiatives. This step provides a range of potential futures, helping prepare for various possibilities and make informed decisions.</p>
      </div>
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
      <div  className="">
        <h3  className="text-xl font-semibold">Monitoring and Adjustments</h3>
        <p  className="text-gray-400 mt-3">Actual financial performance is continuously monitored against forecasted projections to gauge accuracy and relevance. Forecasts are adapted as needed based on emerging data or shifts in market dynamics to optimize strategic decision-making. Regular adjustments ensure forecasts remain up-to-date and aligned with the business's evolving landscape..</p>
      </div>
    </div>
  </div>
</div>

{/* <section className="bg-black">
  <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
    <div>
      <h2 className="text-3xl font-medium text-white">
        Unmatched <br />
        Services.<br />
        Unmatched <br />
        Excellence.
      </h2>
    </div>

    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-black px-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-16 w-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

      </div>
      <p className="mb-3 font-medium uppercase text-white">Customized Bookkeeping System for Every Client</p>
      <p className="text-blue-200">

Our tailored bookkeeping system meets your unique business needs, ensuring precise transaction recording and insightful reporting. Stay compliant and focused on growth with expert financial management designed just for you.</p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-black px-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-16 w-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

      </div>
      <p className="mb-3 font-medium uppercase text-white">Security: Accessing QuickBooks and Bank Info</p>
      <p className="text-blue-200">

Our platform ensures secure access to your QuickBooks and bank information with robust encryption and strict authentication protocols. Safeguard your financial data with confidence and maintain peace of mind.</p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-black px-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-16 w-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
</svg>

      </div>
      <p className="mb-3 font-medium uppercase text-white">Part-Time Bookkeeping with a Full-Time Presence</p>
      <p className="text-blue-200">

Benefit from our part-time bookkeeping services that provide a full-time presence in managing your financial needs. Our dedicated team ensures your books are meticulously maintained, offering comprehensive support tailored to your business's requirements.</p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-black px-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-16 w-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

      </div>
      <p className="mb-3 font-medium uppercase text-white">Weekly, Monthly, or Quarterly Flat Fees</p>
      <p className="text-blue-200"> 

Enjoy straightforward pricing with our competitive flat fees for weekly, monthly, or quarterly bookkeeping services. Simplify your budgeting and financial planning while receiving consistent, reliable support for your business needs.</p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-black px-4 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-16 w-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
</svg>

      </div>
      <p className="mb-3 font-medium uppercase text-white">Customized Reporting and Documentation</p>
      <p className="text-blue-200">

Experience tailored reporting and documentation services that cater specifically to your business's financial needs. Our customized approach ensures detailed and insightful reports, providing you with the essential information to make informed decisions and drive your business forward.</p>
    </div>
  </div>
</section> */}
<section className="mx-auto py-4">
  <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
    <div className="text-center">
        <h2 className="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">Get in touch</h2>
        <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Let's take your business to the moon</p>
        
        <Link href={"/contact"}>
        <p className="shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-pink-500 px-6 py-3 text-xl
         font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg">Contact Us</p>
        </Link>
        
    </div>
  </div>
</section>


{/* 
<div className="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
  <div className="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
    <h2 className="mr-auto mb-4 text-4xl font-medium lg:text-3xl">Experience of <span className="whitespace-nowrap text-blue-600 md:text-gray-600">2 Decades</span></h2>
    <a href="#" className="text-lg font-medium underline hover:text-blue-600">Read our Story</a>
  </div>
  <div className="flex flex-col md:flex-row">
    <div>
      <p className="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis sint debitis sequi animi quaerat repellendus id distinctio dolores minus.</p>
      <p className="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eos quod hic perspiciatis, consectetur suscipit maxime mollitia minima. Enim consequatur ab praesentium ipsum neque dolore expedita, earum rerum reiciendis nihil, deleniti id atque consequuntur necessitatibus distinctio aliquid explicabo quo obcaecati?</p>
    </div>
    <p className="hidden uppercase md:block md:text-7xl">
      Since <br />
      <span className="whitespace-nowrap text-blue-600">20 Years</span>
    </p>
  </div>
</div> */}


  </div>
</section>

    </div>
  )
}

export default page