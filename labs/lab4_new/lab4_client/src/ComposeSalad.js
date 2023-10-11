import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


import MyExtraSelect from './MyExtraSelect';
import MySaladSelect from './MySaladSelect';
import Salad from './Salad';



function ComposeSalad({ onOrder: handleOrder }) {
  const inventory = useLoaderData();
  const {  addToCart } = useOutletContext();
  const foundationList = Object.keys(inventory).filter(name => inventory[name].foundation);
  const proteinList = Object.keys(inventory).filter(name => inventory[name].protein);
  const dressingList = Object.keys(inventory).filter(name => inventory[name].dressing);
  const extraList = Object.keys(inventory).filter(name => inventory[name].extra);
  // const [foundation, setFoundation] = useState('Pasta'); //börjar med pasta
  const [foundation, setFoundation] = useState('');
  const [protein, setProtein] = useState('Kycklingfilé'); //börjar med kyckling
  const [dressing, setDressing] = useState('Caesardressing');
  const [extra, selectedExtras] = useState({ Bacon: true, Fetaost: true });
  const handleProteinChange = (event) => {
    event.target.parentElement.classList.add("was-validated");
    const selectedProtein = event.target.value;
    setProtein(selectedProtein);
  }
  const handleFoundationChange = (event) => {
    event.target.parentElement.classList.add("was-validated");
    const selectedFoundation = event.target.value;
    setFoundation(selectedFoundation);
  }
  const handleDressingChange = (event) => {
    event.target.parentElement.classList.add("was-validated");
    const selectedDressing = event.target.value;
    setDressing(selectedDressing);
  }

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.target.classList.add("was-validated");

    //if(!event.target.checkValidity()){
    if (foundation === '' || protein === '' || dressing === '') {
      alert("Du måste välja en bas, ett protein och en dressing.");
      return;
      //här kommer en varninsruta
      // alert("Du måste välja komigen");
    } else {
      const saladItem = new Salad();
      saladItem.add(foundation, inventory[foundation]);
      saladItem.add(protein, inventory[protein]);
      Object.keys(extra).forEach((key, index) => {
        saladItem.add(key, inventory[key]);
      });
      saladItem.add(dressing, inventory[dressing]);

      addToCart(saladItem); // Call the addToCart function to add the item to the shopping cart
      setFoundation('Pasta');
      setProtein('Kycklingfilé');
      setDressing('Caesardressing');
      selectedExtras({ Bacon: true, Fetaost: true })
      event.target.reset();
      event.target.classList.remove("was-validated");
    }
  };







  return (
    <div className="row h-200 p-5 bg-light border rounded-3">
      <h2>Välj innehållet i din sallad:</h2>


      <div className="container col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj bas</h2>
          <MySaladSelect options={foundationList} value={foundation} onChange={handleFoundationChange} />
          <h2>Välj protein</h2>
          <MySaladSelect options={proteinList} value={protein} onChange={handleProteinChange} />
          <h2> Välj dressing</h2>
          <MySaladSelect options={dressingList} value={dressing} onChange={handleDressingChange} />
          <h2> Välj tillbehör</h2>
          <div className="container">
            <div className="row justify-content-center">
              <MyExtraSelect extras={extraList} selectedExtras={extra} onExtrasChange={selectedExtras} />
            </div>
          </div>


        </div>

        <h2>
          <p>
            Vald sallad: {foundation}, {protein}, {dressing}, med {Object.keys(extra).filter((key) => extra[key]).join(', ')}
          </p>

        </h2>

        <div className="container col-12">
          <form onSubmit={handleAddToCart} noValidate>
            <button type="submit" className="btn btn-primary">
              Lägg i varukorg</button>
          </form>
        </div>


      </div>
    </div>


  );

}



export default ComposeSalad;