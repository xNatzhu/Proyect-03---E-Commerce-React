import React from "react";
import ListMenu from "./ListMenu";
import CartWidget from "./CartWidget";
import './Css/Menu.css';

export default function Menu(props){
    return(
        <header className="App-Header">
            <div>
                <h1 className="App-Menu-Logo-Text">Natzugha</h1>
            </div>
            <div className="App-Menu-Item-Row">
                <ListMenu></ListMenu>
                <CartWidget/>
            </div>
        </header>
    );

}