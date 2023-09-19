import { useState } from 'react';

function ComposeSalad(props) {
  const foundationList = Object.keys(props.inventory).filter(name => props.inventory[name].foundation);
  const proteinList = Object.keys(props.inventory).filter(name => props.inventory[name].protein);
  const dressingList = Object.keys(props.inventory).filter(name => props.inventory[name].dressing);
  const extraList = Object.keys(props.inventory).filter(name => props.inventory[name].extra);
  const [foundation, setFoundation] = useState('Pasta'); //börjar med pasta
  const [protein, setProtein] = useState('Kycklingfilé'); //börjar med kyckling
  const [dressing, setDressing]= useState('Caesardressing');
  const [extra, selectedExtras] = useState({ Bacon: true, Fetaost: true });
  const handleProteinChange = (event) => {
    const selectedProtein = event.target.value;
    setProtein(selectedProtein);
  }
  const handleFoundationChange = (event) => {
    const selectedFoundation = event.target.value;
    setFoundation(selectedFoundation);
  }
  const handleDressingChange = (event) => {
    const selectedDressing = event.target.value;
    setDressing(selectedDressing);
  }
  const handleExtrasChange = (extraName) => {
    selectedExtras((prevExtra) => ({
      ...prevExtra,
      [extraName]: !prevExtra[extraName],
    }));
  };


  
  function MySaladSelect({ options, value, onChange }) {
    return (
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  function MyExtraSelect ({extras, selectedExtras}){
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
    );}
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
      setShowMessage(true);
    };

  

  return (
    <div className="container col-12">
  <div className="row h-200 p-5 bg-light border rounded-3">
    <h2>Välj bas</h2>
    <MySaladSelect options={foundationList} value={foundation} onChange={handleFoundationChange} />
    <h2>Välj protein</h2>
    <MySaladSelect options={proteinList} value = {protein} onChange={handleProteinChange} />
    <h2> Välj dressing</h2>
    <MySaladSelect options = {dressingList} value = {dressing} onChange={handleDressingChange} />
    <h2> Välj tillbehör</h2>
    <div className="container">
  <div className="row justify-content-center">
    
    
    <MyExtraSelect extras={extraList}  selectedExtras = {extra}  />
    </div>
    </div>
    
   


    <h2>  
    <p>
  Vald sallad: {foundation}, {protein}, {dressing}, med {Object.keys(extra).filter((key) => extra[key]).join(', ')}
</p>
 
    </h2>
    
    <div className="container col-12">
      
        
        <button className="btn btn-primary" onClick={handleClick}>
          Här ska du klicka (sen) för att låsa in ditt svar
        </button>
        {showMessage && (
          <p>siri är fucking bäst</p>
        )}
        <button className="btn btn-primary" onClick={handleClick}>
          Skitsnabb Caesar
        </button>
        <button onClick={() => {
  alert('You clicked me!');
}}></button>
      </div>
    

  </div>
</div>


  );
  
}


 
export default ComposeSalad;