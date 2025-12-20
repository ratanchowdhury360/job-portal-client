import React, { use } from 'react';
import JobsCard from '../../Shared/JobsCard/JobsCard';

const HotJob = ({jobsPromise}) => {

     const jobs = use(jobsPromise);
    return (
        <div>
            <h2 className='text-4xl'>Hot Jobs of the Day</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJob;