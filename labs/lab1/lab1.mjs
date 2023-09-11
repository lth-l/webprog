'use strict';
/**
 * Reflection question 1
 * för att JS är ett funktionellt språk
 * det är skillnad på "om den finns" eller om den har ett värde.
 * 
 */

import inventory from './inventory.mjs';
console.log('\n=== beginning of printout ================================')
console.log('inventory:', inventory);

console.log('\n--- Object.keys() ---------------------------------------')
const names = Object.keys(inventory);
names
  .sort((a, b) => a.localeCompare(b, "sv", { sensitivity: 'case' }))
  .forEach(name => console.log(name));

console.log('\n--- for ... in ---------------------------------------')
for (const name in inventory) {
  console.log(name);
}
/**
 * Reflection question 2
 * when will the two examples above give different outputs, and why
is inherited functions, such as forEach(), not printed? Hint: read about enumerable
properties and own properties.
 */

console.log('\n--- Assignment 1 ---------------------------------------')

function makeOptions(inv, prop) {
  if (!Array.isArray(inv)) {
    // Handle the case where inv is not an array, e.g., return an empty string
    return "inv är inte en array lol";
  }
  const filteredIngredients = inv.filter((ingredient) => ingredient[prop]);
  
  const optionsHTML = filteredIngredients.map((ingredient) => {
    const { name, price } = ingredient;
    const key = name; // Set the key attribute using the name
    return `<option value="${name}" key="${key}">${name}, ${price} kr</option>`;
  });

  return optionsHTML.reduce((options, option) => options + option, "");
}
 

console.log(makeOptions(inventory, 'foundation'));

console.log('\n--- Assignment 2 ---------------------------------------')
class Salad {
  constructor() { 
    this.foundation = null;
    this.protein = [];
    this.extra = [];
    this.dressing = [];
  }
  add(name, properties) {
    if (name === "foundation"){
      if (!this.foundation) {
        this.foundation=properties;
      } else {
        console.log('Error: bara 1 foundation bror');
        return;
      }
    } else if (name === "protein"){
      this.protein.push(properties);
    } else if (name === "extra"){
      this.extra.push(properties);
    } else if (name === "dressing"){
      this.dressing.push(properties);
    }
    console.log( name + ' added');
    return this;
   }
  remove(name) { 
    if (name === "foundation") {
      this.foundation=null;
    } else if (name === "protein") {
      this.protein.splice(this.protein.indexOf(name), 1);
    } else if (name === "extra") {
      this.extra.splice(this.extra.indexOf(name), 1);
    } else if (name === "dressing") {
      this.dressing.splice(this.dressing.indexOf(name), 1);
    }
    console.log(name + ' removed!');
    return this;
  }
 /**  toJSON() {
    return { "ingredients": this.ingredients };
  }
  */
  getPrice(){
    return 70;
  }
  count(properties){
    return 70;
  }
}

let myCaesarSalad = new Salad()
  .add('Sallad', inventory['Sallad'])
  .add('Kycklingfilé', inventory['Kycklingfilé'])
  .add('Bacon', inventory['Bacon'])
  .add('Krutonger', inventory['Krutonger'])
  .add('Parmesan', inventory['Parmesan'])
  .add('Ceasardressing', inventory['Ceasardressing'])
  .add('Gurka', inventory['Gurka']);
console.log(JSON.stringify(myCaesarSalad) + '\n');
myCaesarSalad.remove('Gurka');
console.log(JSON.stringify(myCaesarSalad) + '\n');

console.log('\n--- Assignment 3 ---------------------------------------')



console.log('En ceasarsallad kostar ' + myCaesarSalad.getPrice() + 'kr');
// En ceasarsallad kostar 45kr
console.log('En ceasarsallad har ' + myCaesarSalad.count('lactose') + ' ingredienser med laktos');
// En ceasarsallad har 2 ingredienser med laktos
//console.log('En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör');
// En ceasarsallad har 3 tillbehör

/*
console.log('\n--- reflection question 3 ---------------------------------------')
console.log('typeof Salad: ' + typeof Salad);
console.log('typeof Salad.prototype: ' + typeof Salad.prototype);
console.log('typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype);
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad);
console.log('typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype);
console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(Salad)));
console.log('check 2: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad)));
console.log('check 3: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype)));
*/
console.log('\n--- Assignment 4 ---------------------------------------')
/*
const singleText = JSON.stringify(myCaesarSalad);
const arrayText = JSON.stringify([myCaesarSalad, myCaesarSalad]);

const objectCopy = new Salad(myCaesarSalad);
const singleCopy = Salad.parse(singleText);
const arrayCopy = Salad.parse(arrayText);

console.log('original myCaesarSalad\n' + JSON.stringify(myCaesarSalad));
console.log('new(myCaesarSalad)\n' + JSON.stringify(objectCopy));
console.log('Salad.parse(singleText)\n' + JSON.stringify(singleCopy));
console.log('Salad.parse(arrayText)\n' + JSON.stringify(arrayCopy));

singleCopy.add('Gurka', inventory['Gurka']);
console.log('originalet kostar ' + myCaesarSalad.getPrice() + ' kr');
console.log('kopian med gurka kostar ' + singleCopy.getPrice() + ' kr');
*/
console.log('\n--- Assignment 5 ---------------------------------------')
/*
let myGourmetSalad = new GourmetSalad()
  .add('Sallad', inventory['Sallad'], 0.5)
  .add('Kycklingfilé', inventory['Kycklingfilé'], 2)
  .add('Bacon', inventory['Bacon'], 0.5)
  .add('Krutonger', inventory['Krutonger'])
  .add('Parmesan', inventory['Parmesan'], 2)
  .add('Ceasardressing', inventory['Ceasardressing']);
console.log('Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr');
myGourmetSalad.add('Bacon', inventory['Bacon'], 1)
console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');
*/
console.log('\n--- Assignment 6 ---------------------------------------')
/*
console.log('Min gourmetsallad har id: ' + myGourmetSalad.id);
console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);
*/

/**
 * Reflection question 4
 */
/**
 * Reflection question 5
 */
/**
 * Reflection question 6
 */
