import React from 'react';

function ViewOrder({ shoppingCart }) {
  return (
    <div>

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
