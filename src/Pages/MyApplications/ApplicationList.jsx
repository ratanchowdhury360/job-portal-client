import React, { use, useState, useEffect } from 'react';
import JobApplicationRow from './JobApplicationRow';
import { deleteApplication } from '../../api/appicationsApi';

const ApplicationList = ({ myApplicationsPromise }) => {
    const initialApplications = use(myApplicationsPromise);
    const [applications, setApplications] = useState(initialApplications);
    const [deletingId, setDeletingId] = useState(null);

    // Update applications when promise resolves
    useEffect(() => {
        setApplications(initialApplications);
    }, [initialApplications]);

    const handleDelete = async (applicationId) => {
        if (!window.confirm('Are you sure you want to delete this application?')) {
            return;
        }

        setDeletingId(applicationId);
        try {
            await deleteApplication(applicationId);
            // Remove the deleted application from the list
            setApplications(prev => prev.filter(app => app._id !== applicationId));
        } catch (error) {
            console.error('Error deleting application:', error);
            alert('Failed to delete application. Please try again.');
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div>
            <h3 className="text-3xl">Jobs Applied so far: {applications.length}</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-8">
                                        <p className="text-gray-500">No applications found.</p>
                                    </td>
                                </tr>
                            ) : (
                                applications.map((application, index) => (
                                    <JobApplicationRow
                                        key={application._id}
                                        index={index}
                                        application={application}
                                        onDelete={handleDelete}
                                        isDeleting={deletingId === application._id}
                                    />
                                ))
                            )
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ApplicationList;