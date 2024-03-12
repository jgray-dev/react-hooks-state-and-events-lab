import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, updateFilter] = useState("All")

  const filteredItems = items.filter((item)=>{
    return item.category === filter || filter === "All"
  })
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>updateFilter(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
