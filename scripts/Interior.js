import { getInterior } from "./database.js";

const interior = getInterior()


export const interiorFunction = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (styles)
    // Styles function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array

    const listItemsArray = interior.map(
        (interior) => {
            return `<li>
            <input type="radio" name="style" value="${interior.id}" /> ${interior.fabric}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
