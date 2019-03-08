// CODE here for your Lambda Classes


class Person {
    
    constructor(object) {
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
        this.gender = object.gender;
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

//const amir = new Person('Amir',37,'dallas','M');
//const sheena = new Person('Sheena',33,'Woodbridge','F');
const yunas = new Person({name: 'Amir',age: 37, location: 'Dallas', gender: 'M'});

console.log(yunas.speak());


class Instructor extends Person {
    
    constructor(object) {
        super(object);
        this.specialty = object.specialty;
        this.favLanguage = object.favLanguage;
        this.catchPhrase = object.catchPhrase;
    }
    
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    
    grade(student,subject) {
        return `'${student.name} receives a perfect score on ${subject}`;
    }
}

const Josh = new Instructor({name: 'Josh',specialty: 'coding', favLanguage: 'JS', catchPhrase: 'Don\'t forget the homies'});









