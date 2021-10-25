import { getWheels } from "./database.js"
import { setWheels } from "./database.js"


const wheels = getWheels()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
            // window.alert(`you have chosen ${chosenOption}`)
        }
    }
)
    



export const wheelsFunction = () => {
    let html = `<h2>Wheels</h2>`

    html += `<select id="wheels">`
    html += `<option value="0">Select A Wheel</option>`

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (wheels)
    // Wheels function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array


    const listItemsArray = wheels.map(
        (wheels) => {
            return `
        <option value ="${wheels.id}">${wheels.type}</option>`

        }
)

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"
 
    return html

}


