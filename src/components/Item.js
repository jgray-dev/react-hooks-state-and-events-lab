import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false) 

  function changeCart() {
    setInCart(!inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart?"remove":"add"} onClick={()=>{setInCart(!inCart)}}>{inCart?"Remove from":"Add to"} Cart</button>
    </li>
  );
}

export default Item;
