
function Shoes(props) {
    return (
        <div style={{
            margin: "15px",
            backgroundColor: "white",
            color: "black",
            width:"300px",
            height:"400px",
            borderRadius:"15px",
            boxShadow:"7px 7px 15px black",
            padding:"15px",
            textAlign:"start",
        }}>
            <h1 style={{margin:"0"}}>{props.name}</h1>
            <div style={{width:"100%",height:"60%"}}>
            <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={props.imgSrc} alt="shoe" />
            </div>
            <label>size: {props.size}</label>
            <br/>
            <label>Price: {props.price}$</label>
        </div>
    );
}

export default Shoes;