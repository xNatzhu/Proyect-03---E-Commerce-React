import React, { useEffect, useState } from "react";
import Item from "./Item"
import {DataProduct} from '../../Data/DataProduct'

export default function ListItem(props){
    const [listProduct, setListProduct] = useState([]) //Es un array vacia para que se vaya almacenando cada product

    //Funcion promesa para las peticiones de datos.
    function getProductos(){
        return new Promise((resolve, reject) => {
            return resolve(DataProduct) //Una vez que se lea la promesa, se añade un return, para que si da correcto en este caso leera el codigo sincronico que tendra adentro, que puede ser una api con informacion. Un json, ect. Es la informacion que lee
        })
    }

    useEffect(()=>{
        //recordar que las funciones y el then llevan ()
        getProductos().then((productoItem)=>{
            setListProduct(productoItem)
        });
    },[])


    return(
        <div>
            {listProduct.map((producto)=>{return <Item key={producto.id} producto={producto}/>})}
        </div>
    );
}