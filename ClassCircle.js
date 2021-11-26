class circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
getRadius(){
    console.log(this.radius)
}
getColor(){
    console.log(this.color);
}    
getArea(){
    let area = (Math.PI*(this.radius**2));
    console.log(area)
}
getCircumference(){
    let circum = (2*Math.PI*this.radius);
    console.log(circum)

    
}
}
let circle1 = new circle(5.0,"red");