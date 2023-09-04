import React from 'react';
import './EmployeeTable.css'

const EmployeeTable = ({ employees, onEmployeeClick }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.job}</td>
                        <td>{employee.department}</td>
                        <td style={{textAlign:'center'}}>
                            <button onClick={() => onEmployeeClick(employee)}>View Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;