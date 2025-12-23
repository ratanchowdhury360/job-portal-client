import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            My Posted Jobs
          </h2>
          <p className="text-gray-500">
            Manage and track all jobs you have published
          </p>
        </div>

        <div className="badge badge-secondary badge-lg">
          {user?.email}
        </div>
      </div>

      {/* Content */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">

          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            }
          >
            <JobLists
              jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
            />
          </Suspense>

        </div>
      </div>

    </div>
  );
};

export default MyPostedJobs;
