class Person {
    constructor(option) {
        this.age = option.age;
        this.name = option.name;
    }
    info () {
        console.log("The person is called " + this.name + " and is " + this.age + " years old");
    }
}

const person = new Person( {age: 44, name: 'Tom' });
person.info(); // The person is called Tom and is 44 years old

class Student extends Person {
    constructor(option) {
        super(option);
        this.GPA = option.GPA;
    }

    // Inherited child class constructor overrides the info method
    info () {
    console.log("The person is called " + this.name + " and is " + this.age + " years old. He has an overall GPA of " + this.GPA + " in the university.");
    }

}

const student = new Student( {age: 44, name: 'Tom', GPA: 4.00 })
student.info();