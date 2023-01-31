//encapsulation example

class Emp{
    constructor (id,email){
        this.id = id ;
        this.email = email;
    }
    add_address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`This person id is ${this.id} and address is ${this.add}`);
    }
}
let Emp1 = new Emp(01,'xyz@gmail.com');
Emp1.add_address('Mehsana');
Emp1.getDetails();