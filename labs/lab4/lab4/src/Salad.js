import { v4 as uuidv4 } from 'uuid';
   
   class Salad {
        static instanceCounter = 0; 
        constructor(){
            this.ingredients = {};
              this.uuid = uuidv4(); //gör ny UUID
              this.id = 'salad_' + Salad.instanceCounter++
        }
            

        
  add(name, properties) {
    this.ingredients[name] = properties;
    return this;
   }
  remove(name) { 
    delete this.ingredients[name];
    return this;
  }
 getIngredients(){
    return Object.keys(this.ingredients);
 }
  
 getPrice(){
    const totalPrice   = Object.entries(this.ingredients).map(([name, properties]) => properties.price) //en array av alla priser
    .reduce((sum, price) => sum + price);
       return totalPrice;
 }

 count(specialProperty){
    return Object.entries(this.ingredients).filter(([name, properties]) => properties[specialProperty]).length;
} //hade inte behövt entries, hade räckt med values (endast properties)
 

}
    

    export default Salad;