import { Disclosure, Menu, Transition } from '@headlessui/react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Example() {

    const { data, error } = useSWR('/api/staticdata?filename=nav', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { logoUrl, navLinks } = data

    return (
        <Disclosure as="nav" className="bg-primary-400 shadow" id='home'>
            {({ open }) => (
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="block w-auto h-9 lg:hidden" alt="No alt" src={logoUrl} />
                                <img className="hidden w-auto h-14 lg:block" alt="No alt" src={logoUrl} />
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {navLinks.map((link) => (
                                    <a className="inline-flex items-center border-transparent px-1 pt-1 text-sm hover:border-gray-300 hover:text-gray-700 text-gray-900 font-bold" href={link.href}>{link.name}</a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:items-center md:flex">
                            <button id="cuxpyc" className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-lg hover:bg-primary-600 rounded-2xl bg-primary-700 hover:bg-primary-600 font-bold px-4 py-3 nj-lead sm:">Free Quote</button>
                            <div className="relative ml-3">
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button id="xwnngr" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-black">
                                <span className="sr-only">Open main menu</span>
                                <span className="block h-6 w-6">
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                    </svg>
                                </span>
                                <span className="hidden h-6 w-6">
                                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Disclosure>
    )
}
