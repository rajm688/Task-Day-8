class uberRide {
    constructor(distance,passanger){
        this.distance = distance;
        this.passanger = passanger;
    }
    calculatefare(distance,passanger) {  
        var subTotal = 0.0; 
        var pricePerFifthMile = 0.50; 
        var dropOffCharge = 2.50; 
        var overTwoPassengerCharge = 2.00; 
        var tripDistance = distance 
        var passengers = passanger
            if (passengers>2) { 
                subTotal = overTwoPassengerCharge(passengers-2); 
            } 
            subTotal += parseInt(tripDistance)*pricePerFifthMile; 
            subTotal+=dropOffCharge; 
             return subTotal.toFixed(2); 
    } 
}
let trip1 = new uberRide(2,2)