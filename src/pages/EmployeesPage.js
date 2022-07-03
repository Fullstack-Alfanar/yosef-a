import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function EmployeesPage() {
    const [employeeList, setEmployees] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("employeeListStorage")) {
            setEmployees(JSON.parse(localStorage.getItem("employeeListStorage")));
        }
    }, []);
    return <table>
        <thead>
            <tr>
                <td><label>First Name</label></td>
                <td><label>Last Name</label></td>
                <td><label>Title</label></td>
                <td><label>Country</label></td>
                <td><label>City</label></td>
                <td><label>Birth Date</label></td>
                <td><label>Image</label></td>
            </tr>
        </thead>
        <tbody>
            {employeeList.length === 0 ?
                <h3>No Employees Yet!!<br />Try To Add One.</h3> :
                employeeList.map((elem) =>
                    <tr>
                        <td>{elem.fname}</td>
                    </tr>
                )
            }
        </tbody>
    </table>

}

export default EmployeesPage;