import React from 'react';
import './EmployeeModal.css'

const EmployeeModal = ({ employee, onClose }) =>
{
    return (
        <div className="modal" style={{ display: employee ? 'block' : 'none' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Employee Details</h2>
                <p>Name: {employee.name}</p>
                <p>Job Title: {employee.job}</p>
                <p>Department: {employee.department}</p>
                <p>Email: {employee.email}</p>
            </div>
        </div>
    );
};

export default EmployeeModal;