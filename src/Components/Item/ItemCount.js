import React, { useState, useEffect } from 'react';
import "./css/itemCount.css"
export default function ItemCount(props) {
    const [stockLimit, setStockLimit] = useState(props.stock)
    const [countStock, setCountStock] = useState(props.initially)


    const addProduct =(num)=>{
            setCountStock(
                countStock + num
            )
    }
    return(
        <div>
           {/*Para pasar datos a un atributo con una funcion, se debe realizar una funcion anonima para pasar el parametro.Aunque sea una funsion por props debe
           armarse una arrow function y añadir la funsion con su parametro de lo contrario dara ERROR.
           
           El disable permite poder desabilitar la funcion de elemento, en este caso un boton, su propiedad se basa en el operador
           ternario.

           se debe tener en cuenta que si le digo "contador es menor a stock" lo que hace disable interpretar que "si el contador es menor a stock
           entonces me lo desahabilitas."


           
           */} 
           <div className='App-Item-Count-container'>
                <button className='App-Item-Count-Button' onClick={() => addProduct(+1)} disabled={countStock === stockLimit ? true : null}>+</button>
                <h3 className='App-Item-Count-value'>{countStock}</h3>
                <button className='App-Item-Count-Button' onClick={() => addProduct(-1)} disabled={countStock === props.initially ? true : null}>-</button>
           </div>
            <button className='App-Item-Count-Button-Cart' onClick={()=>props.addOn(countStock, props.name)}>Añadir al carrito</button>
        </div>
    );
}