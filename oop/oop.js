





function user(username,count,isLoggedIn){
    this.username = username
    this.count = count
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne  = new user ("ldoz", 12, false)
const userTwo  = new user ("bazl", 24, true)

console.log(userOne);
console.log(userTwo);
