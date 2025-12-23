import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    salaryRange,
    description,
    requirements,
    responsibilities,
    company_logo
  } = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Header Card */}
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body md:flex md:flex-row md:items-center gap-6">
          
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <img
              src={company_logo || 'https://via.placeholder.com/120'}
              alt={company}
              className="w-24 h-24 object-contain rounded"
            />
          </div>

          {/* Job Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-lg text-gray-500">{company}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="badge badge-outline">{jobType}</span>
              <span className="badge badge-outline">{location}</span>
              {salaryRange && (
                <span className="badge badge-outline">
                  {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                </span>
              )}
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-4 md:mt-0">
            <Link to={`/jobApply/${_id}`}>
              <button className="btn btn-primary w-full md:w-auto">
                Apply Now
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">

          {/* Description */}
          {description && (
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="text-xl font-semibold">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {responsibilities?.length > 0 && (
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="text-xl font-semibold">Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Requirements */}
          {requirements?.length > 0 && (
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="text-xl font-semibold">Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Job Overview</h3>

              <div className="space-y-2 text-sm">
                <p><strong>Company:</strong> {company}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Job Type:</strong> {jobType}</p>
                {salaryRange && (
                  <p>
                    <strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                  </p>
                )}
              </div>
            </div>
          </div>

          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary w-full">
              Apply for this Job
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;
