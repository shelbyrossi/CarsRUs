import { getPaintColor } from "./database.js"
import { setPaintColor } from "./database.js"

const paintColor = getPaintColor()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paintColor") {
           
            setPaintColor(parseInt(event.target.value))
            // window.alert(`you have chosen ${chosenOption}`)
        }
    }
)


export const paintColorFunction = () => {
    let html = `<h2>Paint</h2>`

    html += `<select id="paintColor">`
    html += `<option value="0">Select A Paint Color</option>`

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (paintColor)
    //  paintColor function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array


    const listItemsArray = paintColor.map(
        (paintColor) => {
            return `
        <option value="${paintColor.id}">${paintColor.color}</option>`

        }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</select>"
    return html

}
