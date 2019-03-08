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


class Student extends Person {
    
    constructor(object) {
        super(object);
        this.previousBackground = object.previousBackground,
        this.className = object.className,
        this.favSubjects = object.favSubjects
    }
    
    listsSubjects() {
        //a method that logs out all of the student's favoriteSubjects one by one.
    } 
    
    PRAssignment() {
        //a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
    } 

    sprintChallenge() {
        //similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    }   
}

class ProjectManager extends Instructor {
    
    constructor(object) {
        super(object);
        this.gradClassName = object.gradClassName;
        this.favInstructor = object.favInstructor;
    }
    
    standUp() {
        //a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
    }
    
    debugsCode() {
        //a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    }
    
}






