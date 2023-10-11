import React from 'react';
function MySaladSelect({ options, value, onChange }) {  //borde vara i egen fil.
    return (
        <select required value={value} onChange={onChange} className='form-select'>
           <option value=''>---</option>
            
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
export default MySaladSelect;