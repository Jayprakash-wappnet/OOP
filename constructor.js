function person(f_name,l_name){
    this.f_name=f_name;
    this.l_name = l_name;
}
let person1 = new person ('jp','darji');
let person2 = new person ('aryan','darji');
console.log(person1.f_name,person1.l_name);
console.log(`${person2.f_name} ${person2.l_name}`);