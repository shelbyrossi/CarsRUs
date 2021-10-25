// define objects of paint color, interior, tech, and wheels 
// define an array to store these objects 

const database = {
    // variable with a value of the array

    orderBuilder: {
        id: 1,
        paintColorId: 2,
        interiorId: 3,
        technologyId: 4,
        wheelId: 5,
        timestamp: "10/2/2021"


    },


    paintColor: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 150 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 350 }
    ],
    interior: [
        { id: 1, fabric: "Beige Fabric", price: 200 },
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
        { id: 1, type: "17 inch pair radial", price: 700 },
        { id: 2, type: "17 inch pair radial black", price: 900 },
        { id: 3, type: "18 inch pair spoke silver", price: 1000 },
        { id: 4, type: "18 inch pair spoke black", price: 600 }
    ],

    orders: [
        {
            id: 1,
            wheelId: 2,
            technologyId: 3,
            interiorId: 4,
            paintColorId: 5,
            timestamp: 12891782791



        }

    ]

}

// define a function that will export a copy of the data as it's value 

export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({ ...technology }))
}

export const getInterior = () => {
    return database.interior.map(interior => ({ ...interior }))
}

export const getPaintColor = () => {
    return database.paintColor.map(paintColor => ({ ...paintColor }))
}

export const getOrders = () => {
    return database.orders.map(orders => ({ ...orders }))
}


//  function to add orderBuilder object to orders array
export const placeOrder = () => {

    const date = new Date()

    // capture timestamp and add it to the orderBuilder
    database.orderBuilder.timestamp = date.toLocaleDateString()

    // add a unique identifier (id) to the orderBuilder

    // if there are no orders in the database, use an .id value of 1
    if (database.orders.length === 0) {
        database.orderBuilder.id = 1

    } else {
        // get the last order in your database -1 because indexed
        const lastIndex = database.orders.length - 1
        // get the .id of that last order and increment by 1 
        const newId = database.orders[lastIndex].id + 1
        // assigning the value of the new incremented id to a variable newId (????)
        database.orderBuilder.id = newId
    }

    // add orderBuilder object in it's transient state to orders array in perm state

    database.orders.push(database.orderBuilder)

    // setting orderBuilder to an empty object
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// notify that the perm state has changed



// Storing what the user clicked on for choices 

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}



