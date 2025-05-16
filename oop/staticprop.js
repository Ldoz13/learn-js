class User {
    constructor(username){
        this.username = username
    }
   logeMe() {
    console.log(`username: ${this.username}`);
}
 static createId(){ // Wont allow 
    return `${Math.floor(Math.random(2)*10000)}`
 }

}


const eldhose = new User('eldhose')

// console.log(eldhose.createId());



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("iphone", "i@pho.ne")

iphone.logeMe()
// console.log(iphone.createId());
