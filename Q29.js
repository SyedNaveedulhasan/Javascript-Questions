const car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine: function() {
        console.log(`Starting the engine of ${this.make} ${this.model}`);
    }
};


car.startEngine();
