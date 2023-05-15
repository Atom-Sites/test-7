import useSWR from 'swr'

function Feature({ name, description }) {
    return (
        <div className="relative pl-9">
            <dt className="inline text-gray-900 font-bold">
                <span className="absolute left-1 top-1 h-5 w-5 text-primary-500">
                    <svg className="absolute left-1 top-1 h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                </span>
                <span className="">{name} </span>
            </dt>
            <dd className="inline">{description}</dd>
        </div>
    )
}


function ServiceLeft(props) {
    const { serviceBlurb, serviceSlug, serviceText, imageUrl, imageAlt, features } = props;

    return (
        <div className="overflow-hidden py-24 bg-primary-50 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-primary-700">{serviceBlurb}</h2>
                            <p className="mt-2 text-3xl tracking-tight text-gray-900 font-extrabold sm:text-4xl">{serviceSlug}</p>
                            <p className="text-lg text-gray-600 mt-6 leading-7">{serviceText}</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <Feature name={feature.name} description={feature.description} />
                                ))}
                            </dl>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-semibold hover:bg-primary-400 rounded-2xl bg-primary-700 hover:bg-primary-600 text-base py-3 px-4" href="#">Get a Free Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <img className="max-h-[700px] w-[48rem] max-w-none rounded-xl shadow-xl ring-gray-400/10 sm:w-[57rem]" src={imageUrl} Alt={imageAlt} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ServiceRight(props) {
    const { serviceBlurb, serviceSlug, serviceText, imageUrl, imageAlt, features } = props;

    return (<div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                <div className="lg:pr-4 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-primary-700">{serviceBlurb}</h2>
                        <p className="mt-2 text-3xl tracking-tight text-gray-900 font-extrabold sm:text-4xl">{serviceSlug}</p>
                        <p className="text-lg text-gray-600 mt-6 leading-7">{serviceText}</p>
                    </div>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {features.map((feature) => {
                            <Feature name={feature.name} description={feature.description} />
                        })}
                    </dl>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a className="nj-lead font-heading text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-semibold hover:bg-primary-400 rounded-2xl bg-primary-700 hover:bg-primary-600 text-base py-3 px-4" href="#">Get a Free Quote</a>
                    </div>
                </div>
                <img className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0" src={imageUrl} Alt={imageAlt} />
            </div>
        </div>
    </div>)
}

const fetcher = (Url) => fetch(Url).then((res) => res.json())

function Services() {
    const { data, error } = useSWR('/api/staticdata?filename=services', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { services } = data

    return (
        <div id={data.anchor}>
            {services.map((service, index) => {
                if (index % 2 == 0) {
                    return <ServiceLeft key={index} {...service} />
                } else {
                    return <ServiceRight key={index} {...service} />
                }
            })}
        </div>
    );

}

export default Services;

