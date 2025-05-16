class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@exo.com","6573573")

chai.addCourse()

const tea = new User("tea")

tea.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

