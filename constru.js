//defining class usinfg ES6
class Vehicle{
    constructor (name,color,number){
        this.name = name ;
        this.color = color ;
        this.number = number ;
    };
    
}
Vehicle.prototype.getdetail = function(){
    console.log('This bike is'+ this.name);
}
    let bike1 = new Vehicle('passion','black','gj01');
    let bike2 = new Vehicle('Maestro','white','gj02');

console.log(bike1.name);
console.log(bike2.color);
console.log(`${bike1.color} ${bike1.number}`);
console.log(bike1.getdetail());
``

