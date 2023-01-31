class car{
    constructor(model,color,engine){
        this.model = model;
        this.color = color;
        this.engine = engine;
    }
    info_car(){
        console.log(`This car's model is ${this.model} and color : ${this.color}`);
    }
}
 let alto = new car('C_2020','silver','500cc');

 alto.info_car();
 console.log(alto.engine);