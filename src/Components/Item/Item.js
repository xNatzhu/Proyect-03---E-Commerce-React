import React from "react";
import "./css/Item.css"
export default function Item(props){
    return(
        <div className="App-Item-Card">
            <figure>
                <img src={props.producto.thumbnail}/>
            </figure>
            <h3 className="App-Item-Name">{props.producto.name}</h3>
            <h3 className="App-Item-Name">${props.producto.price}</h3>
        </div>
    );
}