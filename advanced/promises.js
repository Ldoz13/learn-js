// const promiseOne = new Promise(function (resolve, reject){
//     // Do an async task
//     // DB call, network call

//     setTimeout(()=>{
//         console.log("Async Task is complete");
//         resolve()
        
//     },1000, false)
// })


// promiseOne.then(function(){
//     console.log("Promise Consumed");
    
// })



// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("ASync Task 2");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Async 2 resolved");
    
// })


// const promiseThree =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({username: "eldhose", email:"eldhose@gmail.com"})
//     },1000)
// })


// promiseThree.then((user)=>{
//     console.log(user);
    
// })


// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:"eldhose", email:"eldhose@gmail.com"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username

//     }).then((username) => {
//         console.log(`Username: ${username}`);

//     }).catch((error) => {
//         console.log(error);

//     }).finally(()=>{
//         console.log("Promise Resolved/Rejected");
        
//     })


// const promiseFive = new Promise ((resolve,reject )=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username:"Javascript", email:"javascript@gmail.com"})
//         }
//         else{
//             reject('ERROR: Javascript went wrong')
//         }
//     }, 1000)
// });


// async function consumePromiseFive (){
// try {
//     const response = await promiseFive
//     console.log(response);
// } catch (error) {
//     console.log(error);
    
// }
// }

// consumePromiseFive()


// async function getALlUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
    
//         console.log(data); 
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// getALlUsers()


fetch('https://api.standardconsumers.com/users/customers/1')
.then((response)=>{
    return response
})
.then((data)=>{
    console.log(data.status); 
})
.catch((error)=>{console.log(error);
})