import { paintColorFunction } from "./Paints.js"
import { interiorFunction } from "./Interior.js"
import { technologyFunction } from "./Technologies.js"
import { wheelsFunction } from "./Wheels.js"
import { placeOrder } from "./database.js"
import { Orders } from "./Orders.js"

// importing the functions that generate the html representation of data 



// Order Button 
export const OrderButtonHTML = () => {
    return `
      <button id="orderButton">Place Order</button>
    `
  }

document.addEventListener(
  "click",
  (event) => {
    if (event.target.id === "orderButton") {
     placeOrder()
    }
  }
)



export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                
                ${paintColorFunction()}
            </section>
            <section class="choices__interior options">
             
                ${interiorFunction()}
            </section>
            <section class="choices__technologies options">
          
                ${technologyFunction()}
            </section>
            <section class="choices__wheels options">
           
                ${wheelsFunction()}
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
           
        </article>
    `
}


