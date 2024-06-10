'use client';

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon , ChatBubbleLeftIcon, HomeIcon, 
    PaperAirplaneIcon,
    ChevronDownIcon, 
    PhoneIcon, PlayCircleIcon,UserGroupIcon,CpuChipIcon,
     XMarkIcon} from "@heroicons/react/24/solid";
import { Dialog, Disclosure, Popover, Transition } from
 "@headlessui/react"
import { cn } from "@/lib/utils";



function Header2() {

    const [mobileMenuOpen , setMobileMenuOpen] = useState(false);

    const products = [
        {
            name: "By Role",
            description: "Retailers,Service Providers",
            href: "#",
            icon: UserGroupIcon, 

        },
        {
            name: "By Industry",
            description: "Software as a service, Ecommerce",
            href: "#",
            icon: CpuChipIcon,
        },
       
    ];

    const callsToAction = [
        { name: "See Demo", href: "#", icon: PlayCircleIcon }, {
            name: "Contact Support", href: "#", icon: PhoneIcon
        }
    ]


  return (
    <header className="bg-black">
        <nav className="mx-auto flex max-w-7xl items-center
        justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link href="/" 
                 className="-m-1.5 p-1.5 text-white text-2xl">
                faAs
              
                
                </Link>
            
            </div>

            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5
                inline-flex items-center justify-center 
                rounded-md p-2.5 text-white" 
                onClick={() => setMobileMenuOpen(true)}>
                    <span className="sr-only">
                        Open main menu

                    </span>
                    <Bars3Icon className="h-6 w-6" 
                    aria-hidden="true" /> 

                </button>
            </div>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
                   <span className="text-lg">
                   Home
                    </span> 
                </a>
                <Popover className="relative">
                    <Popover.Button className="flex items-center
                    gap-x-1 text-sm font-semibold leading-6 text-white ">
                    <span className="text-lg">
                    Who We Help
                        </span>    
                        <ChevronDownIcon className="h-5 w-5 flex-none text-white"
                        aria-hidden="true" />
                    </Popover.Button>

                    <Transition as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1" >

                        <Popover.Panel 
                        className="absolute bg-black -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div key={item.name}
                                    className="group relative flex items-center gap-x-6
                                    rounded-lg p-4 
                                    text-sm leading-6 
                                    hover:bg-sky-50">
                                       <div className="flex h-11 flex-none items-center justify-center rounded-lg 
                                       ">
                                        <item.icon className="h-6 w-6 text-blue-600 group-hover:text-blue-600" 
                                        aria-hidden="true" />
                                       
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} 
                                            className="block 
                                            font-semibold text-[#013B94] "> {item.name} <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-[#013B94]">{item.description}</p>
                                        </div>
                                        </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 ">
                                {callsToAction.map((item) => (
                                    <a key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100">
                                        <item.icon className="h-5 w-5 flex-none text-[#013B94]" aria-hidden="true" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Flights
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Car Rentals
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Attractions
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Flight + Hotel
                </a>
            </Popover.Group>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>

        <Dialog as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
            <div className="fixed inset-8 z-10" />

            <Dialog.Panel className="fixed inset-y-0 right-8 z-10 w-full
            overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1
            sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Booking.com</span>
                        <img className="h-8 w-auto" 
                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                        
                        alt="" />
                   
                        </a>
                        <button type="button" className="-m-2.5 
                        rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(false)} >
                            <span className="sr-only">Close Menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />

                        </button>
                </div>                

                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <Disclosure className="-mx-3" as="div" > 
                                    {( {open} )  => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
                                            font-semibold leading-7 text-white hover:bg-blue-800">
                                                Stays
                                                    <ChevronDownIcon className={cn( open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />                                               
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button 
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                            </Disclosure>
                            <a href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                Flights</a> 
                                <a href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                Car Rentals</a> 
                                <a href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                Attractions</a> 
                                <a href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                Flight + Hotel</a> 
                                
                        </div>

                        <div className="py-6">
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
                
        </Dialog>
    </header>
  )
}

export default Header2