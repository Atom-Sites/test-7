import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function USP() {

    const { data, error } = useSWR('/api/staticdata?filename=usp', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { headerText, uspDescription, features } = data


    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{uspDescription}</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400">
                                    <span className="h-6 w-6 text-white">
                                        <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="7" cy="17" r="2" />
                                            <circle cx="17" cy="17" r="2" />
                                            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                                            <line x1="3" y1="9" x2="7" y2="9" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="font-extrabold">{features[0].name}</span>
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{features[0].description}</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400">
                                    <span className="h-6 w-6 text-white">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="font-extrabold">{features[1].name}</span>
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{features[1].description}</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400">
                                    <span className="h-6 w-6 text-white">
                                        <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                                            <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(120 12 13)" />
                                            <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(240 12 13)" />
                                        </svg>
                                    </span>
                                </div>
                                <span className="font-extrabold">{features[2].name}</span>
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{features[2].description}</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

