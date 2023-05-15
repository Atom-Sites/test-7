import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CallToAction() {

    const { data, error } = useSWR('/api/staticdata?filename=cta', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { title, callToAction, image, buttonText, anchor } = data

    return (
        <>
            <div id={anchor} className="relative bg-primary-400">
                <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                    <img className="h-full w-full object-cover" src={image} />
                    <span className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
                        <svg viewBox="0 0 926 676" aria-hidden="true" className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
                            <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"></path>
                            <defs>
                                <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#776FFF"></stop>
                                    <stop offset="1" stop-color="#FF4694"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
                <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                        <p className="mt-2 text-3xl tracking-tight text-gray-900 font-extrabold sm:text-4xl">{title}</p>
                        <p className="mt-6 text-base leading-7 text-black">{callToAction}</p>
                        <div className="mt-8">
                            <div className="mt-10 flex gap-x-6">
                                <a className="nj-lead font-heading shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-white bg-primary-700 text-lg px-5 py-5 hover:bg-primary-600 rounded-2xl font-bold nj-lead">{buttonText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

