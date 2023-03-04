import React from "react";
import ListItem from "./ListItem"
import "./css/ItemListContainer.css"
export default function ItemListContainer(props) {
    return(
        <div className="App-Item-List-Container">
            <h2 className="App-Item-List-Container-Title">Producto Destacado</h2>
            <ListItem/>
        </div>
        
    );
}