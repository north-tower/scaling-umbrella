import React from 'react'

function Article({id,date, title, description, image}: {id: number, date: string, title: string, description: string, image: string}) {
  return (
    <div>
         <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src={image} />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">{date}</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">{title}</a>
          </h2>

          <p className="text-gray-500">{description}</p>

          <div>
            
            <a href="#" className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more{id}</a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Article