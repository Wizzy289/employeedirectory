import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import employees from './Employees.json'

export default function EmployeeTable({ employees, onEmployeeClick }) {
    return (
        <div className='table'>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Job Title</th>
                        <th scope='col'>Department</th>

                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>
                                <div className='d-flex align-items-center'>

                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>{employee.name}</p>
                                        <p className='text-muted mb-0'>{employee.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{employee.job}</p>

                            </td>
                            <td>
                                <p className='text-muted mb-0'>{employee.department}</p>
                            </td>
                            
                            <td>
                                <MDBBtn color='dark' rounded size='sm' onClick={() => onEmployeeClick(employee)}>
                                    View Details
                                </MDBBtn>
                            </td>
                        </tr>

                    ))}

                </MDBTableBody>
            </MDBTable>
        </div>
    )
}
