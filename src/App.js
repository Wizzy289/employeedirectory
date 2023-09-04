import React, { useState } from 'react';
import './App.css'
import SearchBar from './Components/SearchBar/SearchBar';
import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import employeesData from './Components/EmployeeTable/Employees.json';
import EmployeeModal from './Components/EmployeeModal/EmployeeModal';



function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSearch = (searchTerm) => {
    const filteredEmployees = employeesData.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEmployees(filteredEmployees);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
  };
  
  return (
    <div className='container'>
      <h1>EMPLOYEES DIRECTORY</h1>

      <SearchBar onSearch={handleSearch} />
      <EmployeeTable employees={employees} onEmployeeClick={handleEmployeeClick} />
      {selectedEmployee && <EmployeeModal employee={selectedEmployee} onClose={closeModal} />}



    </div>
  );
}

export default App;
