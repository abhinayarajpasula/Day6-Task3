class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    introduce() {
        return `Hello, my name is ${this.name}. I am ${this.age} years old, ${this.gender}, and working as a ${this.occupation}.`;
    }
}

//inheritance
const aadhya = new Person("Aadhya", 24, "Female", "software engineer");
console.log(aadhya.introduce());