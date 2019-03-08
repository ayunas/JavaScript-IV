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
    
    tutor(student) {
        const gradeIncrease = Math.ceil(Math.random()*20);
        student.grade += gradeIncrease;
        console.log(`${this.name} has helped ${student.name} improve their grade by ${gradeIncrease} points!`);
    }
}

class Student extends Person {
    
    constructor(object) {
        super(object);
        this.previousBackground = object.previousBackground;
        this.className = object.className;
        this.favSubjects = object.favSubjects;
        this.grade = Math.ceil(Math.random()*100);
    }
    
    listsSubjects() {
        //a method that logs out all of the student's favoriteSubjects one by one.
        console.log(this.favSubjects);
    } 
    
    PRAssignment(subject) {
        //a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
        console.log(`${this.name} has submitted a PR for {subject}`);
    } 

    sprintChallenge(subject) {
        //similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
    
    graduate() {
        if (this.grade >= 70) {
            console.log(`Congratulations, ${this.name} has graduated Lambda School!`);
        } else { console.log(`Unfortunately, ${this.name} did not score high enough to graduate Lambda School.`);}
    }
    
}

class ProjectManager extends Instructor {
    
    constructor(object) {
        super(object);
        this.gradClassName = object.gradClassName;
        this.favInstructor = object.favInstructor;
    }
    
    standUp(channel) {
        //a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
        console.log(`${this.name} announces to the ${channel}, @${channel} study times!`);
    }
    
    debugsCode(student,subject) {
        //a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//testing statements
const Johnny = new ProjectManager({name: 'Johnny',favInstructor: 'Josh Knell'});
console.log(Johnny);
Johnny.debugsCode({name:'Amir'},'javascript');
const Amir = new Student({name: 'Amir'});
console.log(Amir);

Amir.sprintChallenge('javascript I');
Amir.graduate();
const Josh = new Instructor({name: 'Josh',specialty: 'coding', favLanguage: 'JS', catchPhrase: 'Don\'t forget the homies'});
console.log(Josh);
Josh.tutor(Amir);








