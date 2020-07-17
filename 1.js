function vehicle(vehicleType) {
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
}
var truck = new vehicle( "truck" );
console.log(truck);