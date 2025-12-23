import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios.patch(`http://localhost:3000/applications/${app_id}`, {
      status: e.target.value
    })
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application status updated.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Applications ({applications.length})
        </h2>
        <p className="text-gray-500 mt-1">
          Job ID: <span className="font-mono text-sm">{job_id}</span>
        </p>
      </div>

      {/* Table Card */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-0">

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-200">
                <tr>
                  <th>#</th>
                  <th>Applicant Email</th>
                  <th>Job</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application, index) => (
                  <tr key={application._id}>
                    <th>{index + 1}</th>
                    <td className="font-medium">
                      {application.applicant}
                    </td>
                    <td>
                      <span className="badge badge-outline">
                        {application.jobTitle || 'Applied Job'}
                      </span>
                    </td>
                    <td>
                      <select
                        onChange={e => handleStatusChange(e, application._id)}
                        defaultValue={application.status}
                        className="select select-sm select-bordered"
                      >
                        <option disabled>Update Status</option>
                        <option>Pending</option>
                        <option>Interview</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ViewApplications;
