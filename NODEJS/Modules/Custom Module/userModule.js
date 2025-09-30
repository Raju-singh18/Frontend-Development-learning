
class User{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    isAdult(){
        return this.age >= 18 ? "Yes, I am an adult." : "No, i am not an adult.";
    }
}

module.exports = User;
