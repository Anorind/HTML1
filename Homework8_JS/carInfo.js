class Car{
    constructor(manufacturer, model, year, averageSpeed){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.averageSpeed = averageSpeed;
    }
    carInfo(){
        carInfoElement.textContent = `Car: ${this.manufacturer} ${this.model}, ${this.year} year issue, average speed = ${this.averageSpeed} km/hour.`;
    }
    calculateTravelTime(distanceInKilometers) {
        const hoursPerLeg = 4; 
        const breakDuration = 1; 

        const totalHours = distanceInKilometers / this.averageSpeed;
        const numberOfBreaks = totalHours / hoursPerLeg;
        const totalTravelTime = totalHours + (numberOfBreaks * breakDuration);

        return totalTravelTime;
    }
}