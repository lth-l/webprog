import { useOutletContext } from "react-router-dom";


import React from 'react';

function ViewOrder() {
  const { shoppingCart } = useOutletContext();
  
  return (
    <div>
<h2> I kassan: </h2>
      <ul>
        {shoppingCart.map((salad, index) => (
          <li key={index}>{salad.name}
            <p> Salad {index + 1}. Innehåll: {salad.getIngredients().join(', ')} </p>
            <p>Pris: {salad.getPrice()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewOrder;
