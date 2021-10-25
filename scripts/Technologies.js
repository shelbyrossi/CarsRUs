import { getTechnology } from "./database.js";
import { setTechnology } from "./database.js";


const technology = getTechnology()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            setTechnology(parseInt(event.target.value))
            // window.alert(`you have chosen ${chosenOption}`)
        }
    }
)


export const technologyFunction = () => {
    let html = `<h2>Technology</h2>`

    html += `<select id="technology">`
    html += `<option value="0"</option>Select A Technology Package</option>`

    // Use .map() for converting objects to <li> elements
    // .map() iterates the array and invokes function (technology)
    //  tech function is argument that .map method will accept 
    // iterates array - takes object at current location - pass it as arg to function
    // function defines size parameter - object goes into function - string returned into new array


    const listItemsArray = technology.map(
        (technology) => {
            return `
        <option value="${technology.id}">${technology.tech}</option>`

        }
    )

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</select>"
    return html

}

