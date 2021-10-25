import { getInterior } from "./database.js"
import { setInterior } from "./database.js"

const interior = getInterior()

// change of state event listener

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
            // window.alert(`you have chosen ${chosenOption}`)
        }
    }
)

export const interiorFunction = () => {
    let html = `<h2>Interiors</h2>`

    html += `<select id="interior">`
    html += `<option value="0">"Select An Interior Option</option>`

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (interior)
    // Interior function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array

    const listItemsArray = interior.map(
        (interior) => {
            return `
            <option value="${interior.id}">${interior.fabric}</option>`

        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"
    return html
}
