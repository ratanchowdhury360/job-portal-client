import React from 'react';

const JobApplicationRow = ({ application, index, onDelete, isDeleting }) => {
    const { company, title, company_logo, _id } = application;
    
    const handleDelete = () => {
        if (onDelete) {
            onDelete(_id);
        }
    };

    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={company_logo}
                                alt={`${company} logo`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{company}</div>
                        <div className="text-sm opacity-50">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {company}
                <br />
                <span className="badge badge-ghost badge-sm">{title}</span>
            </td>
            <td>
                <span className="badge badge-success badge-sm">Applied</span>
            </td>
            <th>
                <div className="flex gap-2">
                    <button className="btn btn-ghost btn-xs">details</button>
                    <button 
                        className="btn btn-error btn-xs"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default JobApplicationRow;