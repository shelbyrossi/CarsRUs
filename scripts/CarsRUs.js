import { paintColorFunction } from "./Paints.js"
import { interiorFunction } from "./Interior.js"
import { technologyFunction } from "./Technologies.js"
import { wheelsFunction } from "./Wheels.js"

// importing the functions that generate the html representation of data 



export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Metals</h2>
                ${paintColorFunction()}
            </section>
            <section class="choices__interior options">
                <h2>Sizes</h2>
                ${interiorFunction()}
            </section>
            <section class="choices__technologies options">
                <h2>Styles</h2>
                ${technologyFunction()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsFunction()}
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            
           
        </article>
    `
}


