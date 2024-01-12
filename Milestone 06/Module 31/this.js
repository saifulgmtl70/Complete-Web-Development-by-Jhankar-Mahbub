class Student{
    constructor(name, age, group){
        this.name = name;
        this.age = age;
        this.group = group;
    }
    sleep(){
        console.log(`${this.name} is reading now. Don't distrub him.`);
    }
    activity(){
        console.log(`object`);
    }
}
const Student_1 = new Student("Azad", 21, "Science");
console.log(Student_1);
Student_1.sleep()