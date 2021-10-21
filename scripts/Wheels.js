import { getWheels } from "./database.js";


const wheels = getWheels()


export const wheelsFunction = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (styles)
    // Styles function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array

    const listItemsArray = wheels.map(
        (wheels) => {
            return `<li>
            <input type="radio" name="style" value="${wheels.id}" /> ${wheels.type}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
