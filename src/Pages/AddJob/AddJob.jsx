import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddJob = () => {

  const { user } = useAuth();

  const handleAddAJob = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = data;

    newJob.salaryRange = { min, max, currency };

    // safe requirements
    newJob.requirements = newJob.requirements
      ? newJob.requirements.split(',').map(req => req.trim())
      : [];

    // safe responsibilities
    newJob.responsibilities = newJob.responsibilities
      ? newJob.responsibilities.split(',').map(res => res.trim())
      : [];

    newJob.status = "active";

    console.log(newJob);

    axios.post('http://localhost:3000/jobs', newJob)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This new Job has been saved and published.",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Please add a job</h2>

      <form onSubmit={handleAddAJob}>

        {/* Basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <input name="title" className="input" placeholder="Job Title" />
          <input name="company" className="input" placeholder="Company Name" />
          <input name="location" className="input" placeholder="Location" />
          <input name="company_logo" className="input" placeholder="Company Logo URL" />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input className="btn" type="radio" name="jobType" value="On-Site" aria-label="On-Site" />
            <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
            <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
          </div>
        </fieldset>

        {/* Job Category */}
        <select name="category" className="select">
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>

        {/* Deadline */}
        <input type="date" name="deadline" className="input" />

        {/* Salary */}
        <input name="min" placeholder="Min Salary" className="input" />
        <input name="max" placeholder="Max Salary" className="input" />
        <select name="currency" className="select">
          <option>BDT</option>
          <option>USD</option>
        </select>

        {/* Requirements */}
        <textarea name="requirements" className="textarea" placeholder="Requirements, comma separated"></textarea>

        {/* Responsibilities */}
        <textarea name="responsibilities" className="textarea" placeholder="Responsibilities, comma separated"></textarea>

        {/* HR */}
        <input name="hr_name" className="input" placeholder="HR Name" />
        <input name="hr_email" defaultValue={user?.email} className="input" />

        <input type="submit" className="btn" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
