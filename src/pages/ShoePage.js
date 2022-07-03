import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../styles/ShoePage.scss"
import Shoes from "../components/Shoes"

function ShoePage(props) {

    const [shoeList, setShoes] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("shoeListStorage")) {
            setShoes(JSON.parse(localStorage.getItem("shoeListStorage")));
        }
    }, []);

    return <>
        <div className="shoesContainer" >
            {shoeList.length === 0 ? <h3>No Shoes Yet!!<br />Try To Add One.</h3> : shoeList.map((elem) => <Shoes name={elem.name} size={elem.size} price={elem.price} imgSrc={elem.imgSrc} />)}
        </div>
        <Link to="/addShoe" className="addLink">Add</Link>
    </>
}

export default ShoePage;