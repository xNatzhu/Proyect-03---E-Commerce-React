import React from "react";

export default function ListMenu(){
    return(
       <div>
        <ul className="App-Menu-Ul">
            <li>
                <a className="App-Menu-List" href="https://reactjs.org"target="_blank" rel="noopener noreferrer">Home</a>
            </li>
            <li>
                <a className="App-Menu-List" href="https://reactjs.org"target="_blank" rel="noopener noreferrer">Shop</a>
            </li>
            <li>
                <a className="App-Menu-List" href="https://reactjs.org"target="_blank" rel="noopener noreferrer">Contact</a>
            </li>
        </ul>
       </div>
    );
};