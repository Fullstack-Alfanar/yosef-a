import { useNavigate } from 'react-router-dom';
import "../styles/AddForm.scss";

function AddEmployeePage() {
    const navigate = useNavigate();

    const saveNewEmployee = () => {
        const fnameIn = document.getElementById("fnameIn");
        const lnameIn = document.getElementById("lnameIn");
        const titleIn = document.getElementById("titleIn");
        const countryIn = document.getElementById("countryIn");
        const cityIn = document.getElementById("cityIn");
        const birthDateIn = document.getElementById("birthDateIn");
        const imageURLIn = document.getElementById("imageURLIn");
        console.log(birthDateIn.value);

        let validFName = !(fnameIn.value === null) && !(fnameIn.value === "")
            && fnameIn.value.length >= 2 && fnameIn.value.length < 30;
        let validLName = !(lnameIn.value === null) && !(lnameIn.value === "")
            && lnameIn.value.length >= 2 && lnameIn.value.length < 30;
        let validTitle = !(titleIn.value === null) && !(titleIn.value === "")
            && titleIn.value.length >= 5 && titleIn.value.length < 20;
        let validCountry = !(countryIn.value === null) && !(countryIn.value === "")
            && countryIn.value.length >= 3 && countryIn.value.length < 30;
        let validCity = !(cityIn.value === null) && !(cityIn.value === "")
            && cityIn.value.length >= 2 && cityIn.value.length < 30;
        let validBirthDate = !(birthDateIn.value === null) && !(birthDateIn.value === "");
        let validImg = !(imageURLIn.value === null) && !(imageURLIn.value === "")

        if (validFName && validLName && validTitle && validCountry && validCity && validBirthDate && validImg) {
            console.log("All good man");
            fnameIn.style.borderColor = "";
            lnameIn.style.borderColor = "";
            titleIn.style.borderColor = "";
            countryIn.style.borderColor = "";
            cityIn.style.borderColor = "";
            birthDateIn.style.borderColor = "";
            imageURLIn.style.borderColor = "";

            let employeeList = [];

            let employeeObj = {
                fname: fnameIn.value,
                lname: lnameIn.value,
                title: titleIn.value,
                country: countryIn.value,
                city: cityIn.value,
                birthDate: birthDateIn.value,
                image: imageURLIn.value
            }
            
            if (localStorage.getItem("employeeListStorage")) {
                employeeList = JSON.parse(localStorage.getItem("employeeListStorage"));
            }
            employeeList.push(employeeObj);
            localStorage.setItem("employeeListStorage", JSON.stringify(employeeList));
            navigate("/employees");
        } else {
            console.log("Not good man");
            (!validFName) ? fnameIn.style.borderColor = "red" : fnameIn.style.borderColor = "";
            (!validLName) ? lnameIn.style.borderColor = "red" : lnameIn.style.borderColor = "";
            (!validTitle) ? titleIn.style.borderColor = "red" : titleIn.style.borderColor = "";
            (!validCountry) ? countryIn.style.borderColor = "red" : countryIn.style.borderColor = "";
            (!validCity) ? cityIn.style.borderColor = "red" : cityIn.style.borderColor = "";
            (!validBirthDate) ? birthDateIn.style.borderColor = "red" : birthDateIn.style.borderColor = "";
            (!validImg) ? imageURLIn.style.borderColor = "red" : imageURLIn.style.borderColor = "";
        }

    }
    return <>
        <div className="container">
            <h3>Add a New Employee</h3>
            <form>
                <div className="inputDiv" >
                    <label >first name: </label>
                    <input id="fnameIn" type="text" />
                </div>
                <div className="inputDiv" >
                    <label >last name: </label>
                    <input id="lnameIn" type="text" />
                </div>
                <div className="inputDiv" >
                    <label >title: </label>
                    <input id="titleIn" type="text" />
                </div>
                <div className="inputDiv" >
                    <label >country: </label>
                    <input id="countryIn" type="text" />
                </div>
                <div className="inputDiv" >
                    <label >city: </label>
                    <input id="cityIn" type="text" />
                </div>
                <div className="inputDiv" >
                    <label >birth date: </label>
                    <input id="birthDateIn" type="date" />
                </div>
                <div className="inputDiv">
                    <label >image URL: </label>
                    <input id="imageURLIn" type="text" />
                </div>
            </form>
            <button onClick={saveNewEmployee}>Add Employee</button>
        </div>
    </>
}

export default AddEmployeePage;