import React, { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Header() {
    const { data, error } = useSWR('/api/staticdata?filename=company_id', fetcher);

    useEffect(() => {
        if (!data) return;

        const { company_id } = data;

        const src = `https://cdn.nicejob.co/js/sdk.min.js?id=${company_id}`;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);

        // Clean up function to remove the script when the component is unmounted
        return () => {
            document.head.removeChild(script);
        };
    }, [data]);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <header>
            {/* The script is now appended using useEffect */}
        </header >
    )
}

