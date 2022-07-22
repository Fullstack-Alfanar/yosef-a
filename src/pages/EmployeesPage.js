import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/EmployeesPage.scss"

function EmployeesPage() {
    const [employeeList, setEmployees] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("employeeListStorage")) {
            setEmployees(JSON.parse(localStorage.getItem("employeeListStorage")));
        }
    }, []);
    return <>
        <table>
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
                {
                    employeeList.map((elem) =>
                        <tr>
                            <td><label>{elem.fname}</label></td>
                            <td><label>{elem.lname}</label></td>
                            <td><label>{elem.title}</label></td>
                            <td><label>{elem.country}</label></td>
                            <td><label>{elem.city}</label></td>
                            <td><label>{elem.birthDate}</label></td>
                            <td><img src={elem.image} style={{ height: "50px" }} alt="Employee" /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link to="/addEmployee" className="addLink">Add</Link>
    </>

}

export default EmployeesPage;