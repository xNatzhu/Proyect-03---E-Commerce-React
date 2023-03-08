import React from "react";
import "./css/Item.css"
import ItemCount from "./ItemCount";
export default function Item(props){
    const addOn = (count, name)=>{
        alert("El producto: " + name + " Se agrego al carrito: " + count + " unidades")
    }
    return(
        <div className="App-Item-Card">
            <figure>
                <img src={props.producto.thumbnail}/>
            </figure>
            <h3 className="App-Item-Name">{props.producto.name}</h3>
            <h3 className="App-Item-Name">${props.producto.price}</h3>
            <ItemCount stock={props.producto.stock} name={props.producto.name} initially={1} addOn={addOn}/>
        </div>
    );
}