const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currVal) => {
    // console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc  +  currVal 
}, 1)



// console.log(myTotal);


const cart = [
    {
        itemName: "shirt",
        price:10,
        count:2

    },
    {
        itemName: "pant",
        price:10,
        count:5

    },
    {
        itemName: "saree",
        price:20,
        count:2

    },
    {
        itemName: "dress",
        price:30,
        count:1

    }
]

const cartTotal = cart.reduce( (acc, item ) => {
        return acc + (item.price * item.count)
},0)

console.log(cartTotal);
