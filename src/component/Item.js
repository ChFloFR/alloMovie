import { useState } from "react";
import './Item.css';

function Item (props) { 
    const [itemState, setItemState] = useState('Item state')

    return(
        <div>
        <h1 class="titre-item">hello depuis Item</h1>
        <button class="button-item" onClick={() => props.func(itemState)}>Change state</button>
        </div>
    )
}
export default Item;
