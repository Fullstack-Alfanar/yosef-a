import "../styles/AddShoePage.scss";
import { useNavigate } from 'react-router-dom';

function AddShoePage() {
    const navigate = useNavigate();

    const saveNewShoe = () => {
        const nameIn = document.getElementById("nameIn");
        const sizeIn = document.getElementById("sizeIn");
        const priceIn = document.getElementById("priceIn");
        const imageURLIn = document.getElementById("imageURLIn");

        let validName = !(nameIn.value === null) && !(nameIn.value === "")
            && nameIn.value.length > 2 && nameIn.value.length < 30

        let validSize = !(sizeIn.value === null) && !(sizeIn.value === "")
            && !isNaN(sizeIn.value)
        let validPrice = !(priceIn.value === null) && !(priceIn.value === "")
            && !isNaN(priceIn.value)

        let validImg = !(imageURLIn.value === null) && !(imageURLIn.value === "")

        if (validName && validSize && validPrice && validImg) {
            let shoeList = [];

            let shoeObj = {
                name: nameIn.value,
                price: priceIn.value,
                size: sizeIn.value,
                imgSrc: imageURLIn.value
            }

            if (localStorage.getItem("shoeListStorage")) {
                shoeList = JSON.parse(localStorage.getItem("shoeListStorage"));
            }
            shoeList.push(shoeObj);
            localStorage.setItem("shoeListStorage", JSON.stringify(shoeList));
            navigate("/");
        } else {

        }

    }

    return <>
        <div className="container">
            <h3>Add a New Shoe</h3>
            <form>
                <div className="inputDiv" >
                    <label >name: </label>
                    <input id="nameIn" type="text" />
                </div>
                <div className="inputDiv">
                    <label >size: </label>
                    <input id="sizeIn" type="number" />
                </div>
                <div className="inputDiv">
                    <label >price: </label>
                    <input id="priceIn" type="number" />
                </div>
                <div className="inputDiv">
                    <label >image URL: </label>
                    <input id="imageURLIn" type="text" />
                </div>
            </form>
            <button onClick={saveNewShoe}>Add Shoe</button>
        </div>
    </>
}

export default AddShoePage;