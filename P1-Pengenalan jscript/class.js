class Holiday {
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }
    info(){
        alert('${this.destination} will take ${this.days} days');

    }
}

class Expedition extends Holiday {
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }

    info(){
        super.info();
    }
}

const tripWithGear = new Expedition('Semeru', 10, ['Sunglasses', 'Flags', 'Camera']);
tripWithGear.info();