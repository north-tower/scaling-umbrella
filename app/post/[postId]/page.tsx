import React, { useEffect, useState } from 'react';
type Props = {
  params: {
    postId: string;
  }
}




const blogPosts = [

  {
    id:1,
    date: "2024-06-01",
    title: "The Importance of Accurate Bookkeeping",
    shortDescription: "Discover why precise bookkeeping is crucial for business success.",
    description: "Accurate bookkeeping ensures reliable financial records, aiding in strategic planning and compliance.",
    longDescription: "Accurate bookkeeping is the backbone of a successful business. It provides reliable financial records that are essential for strategic planning, compliance, and decision-making. By keeping meticulous records, businesses can track their financial health, identify trends, and make informed decisions that drive growth. Additionally, accurate bookkeeping helps maintain compliance with tax regulations, avoiding potential penalties and audits. Embrace precise bookkeeping practices to ensure your business thrives in today's competitive market."
  },
  {
    id:2,
    date: "2024-06-05",
    title: "Automating Your Bookkeeping: Benefits and Best Practices",
    shortDescription: "Learn how automation can streamline your bookkeeping process.",
    description: "Automation in bookkeeping reduces errors, saves time, and increases efficiency.",
    longDescription: "Automating your bookkeeping process offers numerous benefits, including reduced errors, time savings, and increased efficiency. By leveraging technology, businesses can automate repetitive tasks such as data entry, reconciliations, and report generation. This not only frees up valuable time but also minimizes the risk of human error. Implementing best practices for automation, such as choosing the right software and integrating it with your existing systems, ensures a smooth transition and maximizes the benefits. Explore how automation can transform your bookkeeping and boost your business's productivity."
  },
  {
    id:3,
    date: "2024-06-10",
    title: "Managing Cash Flow Effectively",
    shortDescription: "Strategies to maintain a healthy cash flow for your business.",
    description: "Effective cash flow management is essential for business stability and growth.",
    longDescription: "Managing cash flow effectively is vital for the stability and growth of any business. It involves monitoring the inflows and outflows of cash to ensure that there are enough funds to cover expenses and invest in opportunities. Key strategies include forecasting cash flow, maintaining a cash reserve, and optimizing accounts receivable and payable. By staying on top of your cash flow, you can avoid financial shortfalls and take advantage of growth opportunities. Implementing robust cash flow management practices helps ensure that your business remains financially healthy and resilient."
  },
  {
    id:4,
    date: "2024-06-15",
    title: "Understanding Financial Statements",
    shortDescription: "A guide to interpreting and using financial statements for business decisions.",
    description: "Financial statements provide crucial insights into your business's financial health.",
    longDescription: "Understanding financial statements is essential for making informed business decisions. These statements, including the balance sheet, income statement, and cash flow statement, offer a comprehensive view of your business's financial health. The balance sheet provides a snapshot of your assets, liabilities, and equity, while the income statement shows your revenues and expenses over a period. The cash flow statement highlights the inflows and outflows of cash. By interpreting these statements, you can assess your business's performance, identify areas for improvement, and make strategic decisions that drive growth and profitability."
  },
  {
    id:5,
    date: "2024-06-20",
    title: "The Role of a Bookkeeper in Small Businesses",
    shortDescription: "Explore how bookkeepers support small business success.",
    description: "Bookkeepers play a crucial role in maintaining accurate financial records for small businesses.",
    longDescription: "The role of a bookkeeper is crucial for the success of small businesses. Bookkeepers are responsible for maintaining accurate financial records, tracking expenses, and ensuring compliance with tax regulations. They provide valuable insights into the financial health of the business, helping owners make informed decisions. Additionally, bookkeepers prepare financial reports that are essential for strategic planning and securing funding. By outsourcing bookkeeping, small business owners can focus on their core operations while ensuring their financial records are in expert hands. Explore the various ways bookkeepers support small business success and contribute to their growth."
  },
  {
    id:6,
    date: "2024-06-25",
    title: "Tax Preparation Tips for Small Businesses",
    shortDescription: "Essential tips to simplify tax preparation for your small business.",
    description: "Effective tax preparation ensures compliance and maximizes deductions for small businesses.",
    longDescription: "Tax preparation can be a daunting task for small businesses, but with the right strategies, it can be simplified. Effective tax preparation involves maintaining organized financial records, understanding tax regulations, and maximizing deductions. Key tips include keeping track of all expenses, staying updated with tax law changes, and consulting with a tax professional. Proper tax preparation ensures compliance with regulations and can result in significant savings for your business. By implementing these tips, you can streamline the tax preparation process and focus on growing your business with confidence."
  }
];


function Page({ params: {postId}}: Props) {

  const post = blogPosts.find(p => p.id.toString() === postId);

  if (!post) {
    return <div>Post not found</div>;
  }
  

  return (
    <div>
    

<main>
  <article>
    <header className="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
      <p className="text-gray-500">Published {post.date}</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">{post.title}</h1>
      <p className="mt-6 text-lg text-gray-700">{post.shortDescription}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
        <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
      </div>
      <img className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
    </header>

    <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
      
      <blockquote className="max-w-lg border-l-4 px-4">
        {post.description}
        <span className="whitespace-nowrap text-sm">— Author</span>
      </blockquote>
      <p>{post.longDescription}</p>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique reiciendis et recusandae provident repellendus rem doloremque eaque error assumenda?</p> */}
    </div>
  </article>
</main>

<div className="w-fit mx-auto mt-10 flex space-x-2">
  <div className="h-0.5 w-2 bg-gray-600"></div>
  <div className="h-0.5 w-32 bg-gray-600"></div>
  <div className="h-0.5 w-2 bg-gray-600"></div>
</div>

<aside aria-label="Recent Posts" className="mx-auto mt-10 max-w-screen-xl py-20">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
  
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Most Recent Posts</h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
    </div>
   
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
    
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">The Pines and the Mountains</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
   
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">The Coding Mania</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
     
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">Architectural Warfare</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
     
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">April 2, 2022</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="active:text-rose-600 transition duration-100 hover:text-rose-500">Blues in Architechture</a>
          </h2>

          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
   
    </div>
  </div>
</aside>

    </div>
  );
}

export default Page;
