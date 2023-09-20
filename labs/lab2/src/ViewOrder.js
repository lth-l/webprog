import React from 'react';

function ViewOrder({ shoppingCart }) {
  return (
    <div>
     
      <ul>
        {shoppingCart.map((salad, index) => (
          <li key={index}>{salad.name}
          <p> Salad {index + 1}. Innehåll: {salad.foundation} {salad.protein} {salad.dressing} {Object.keys(salad.extra).join(', ')} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewOrder;
