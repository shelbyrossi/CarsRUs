// define objects of paint color, interior, tech, and wheels 
// define an array to store these objects 

const database = {
    // variable with a value of the array
    paintColor: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 150 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 350 }
    ],
    interior: [
        { id: 1, fabric: "Beight Fabric", price: 200 },
        { id: 2, fabric: "Charcoal Fabric", price: 500 },
        { id: 3, fabric: "White Leather", price: 750 },
        { id: 4, fabric: "Black Leather", price: 800 }

    ],

    technology: [
        { id: 1, tech: "basic package", price: 1100 },
        { id: 2, tech: "navigation package", price: 1500 },
        { id: 3, tech: "visibility package", price: 1700 },
        { id: 4, tech: "ultra package", price: 2000 }
    ],

    wheels: [
        { id: 1, type: "17 inch pair radial", price: 700},
        { id: 2, type: "17 inch pair radial black", price: 900},
        { id: 3, type: "18 inch pair spoke silver", price: 1000},
        { id: 4, type: "18 inch pair spoke black", price: 600}
    ]

}

// define a function that will export a copy of the data as it's value 

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getTechnology = () => {
    return database.technology.map(technology=> ({...technology}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getPaintColor = () => {
    return database.paintColor.map(paintColor => ({...paintColor}))
}