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
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {shoeList.length === 0 ? <h3>No Shoes Yet!!<br />Try To Add One.</h3> : shoeList.map((elem) => <Shoes name={elem.name} size={elem.size} price={elem.price} imgSrc={elem.imgSrc} />)}
            {/* 
     
            <Shoes name="Sandals" size={20} price={"1000"} imgSrc={"https://ae01.alicdn.com/kf/H0ae62f276634413bbb2fcf52a2e6ca41r/Summer-Old-Man-Wearing-Men-s-Soil-Leather-Beach-Shoes-Breathable-Mesh-Eyelids-Sandals-Baotou-Non.jpg"} /> 
            */}
        </div>
        <Link to="/addShoe" className="addLink">Add</Link>
    </>
}

export default ShoePage;