import React from 'react';
import Banner from '../Banner/Banner';
import HotJob from '../jobs/HotJob';

const Home = () => {

    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <HotJob jobsPromise={jobsPromise}> </HotJob>
        </div>
    );
};

export default Home;