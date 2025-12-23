import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import HotJob from '../jobs/HotJob';

const fetchJobs = () => {
    return fetch('http://localhost:3000/jobs').then(async res => {
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            // Throw a regular Error so our ErrorBoundary / router errorElement can catch it
            throw new Error(text || `Failed to load jobs (status ${res.status})`);
        }
        return res.json();
    });
};

const Home = () => {

    const jobsPromise = fetchJobs();
    return (
        <div>
            <Banner></Banner>

            <Suspense fallback={'Loading hot jobs'}>
                <HotJob jobsPromise={jobsPromise}> </HotJob>
            </Suspense>
        </div>
    );
};

export default Home;