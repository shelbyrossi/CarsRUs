

import { getOrders } from "./database.js"
import { getInterior } from "./database.js"
import { getPaintColor } from "./database.js"
import { getTechnology } from "./database.js"
import { getWheels } from "./database.js"





const buildOrderListItem = (order) => {

    const interiors = getInterior()
    const foundInterior = interiors.find(
        (interiors) => {
            return interiors.id === order.interiorId
        }

    )

    const paintColors = getPaintColor()
    const foundPaint = paintColors.find(
        (paint) => {
            return paint.id === order.paintColorId
        }
    )

    const technology = getTechnology()
    const foundTechnology = technology.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const wheels = getWheels()
    const foundWheel = wheels.find(
        (wheels) => {
            return wheels.id === order.wheelId
        }

    )
    

    const totalCost =  foundWheel.price + foundTechnology.price + foundInterior.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
    


    }

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
