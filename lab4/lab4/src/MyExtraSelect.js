import React from 'react';

function MyExtraSelect({ extras, selectedExtras, onExtrasChange }) {

  const handleExtrasChange = (extraName) => {
    onExtrasChange((prevExtras) => ({
      ...prevExtras,
      [extraName]: !prevExtras[extraName],
    }));
  };

  return (
    <div>
      {extras.map((extra) => (
        <label key={extra}>
          <input
            type="checkbox"
            name={extra}
            checked={selectedExtras[extra]}
            onChange={() => handleExtrasChange(extra)}
          />
          {extra}
        </label>
      ))}
    </div>
  );
}

export default MyExtraSelect;
