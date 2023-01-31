class Student{
    constructor(name,age,gender){
        this.myname = name;
        this.ages = age;
        this.gender = gender;
    }
    biodata(){
        console.log(`the student name is ${this.myname},age is ${this.ages}`);
    }
}

class Player extends Student{

}

let student1 = new Player('Jp',21,'Male');
student1.biodata();