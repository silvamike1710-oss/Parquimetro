class ParkingMachine {

    constructor(payment) {
        this.payment = payment;
        this.minutes = 0;
        this.cost = 0;
        this.change = 0;
    }

    calculate() {

        if (this.payment < 1) {
            return "Minimum payment is $1 for 30 minutes.";
        }

        if (this.payment >= 3.00) {
            this.minutes = 120;
            this.cost = 3.50;
        } 
        else if (this.payment >= 1.75) {
            this.minutes = 60;
            this.cost = 1.75;
        } 
        else {
            this.minutes = 30;
            this.cost = 1.00;
        }

        this.change = this.payment - this.cost;

        return `Parking time: ${this.minutes} minutes. Change: $${this.change.toFixed(2)}`;
    }
}

function calculateParking() {

    const paymentValue = Number(document.getElementById("payment").value);
    const message = document.getElementById("message");

    const machine = new ParkingMachine(paymentValue);

    message.textContent = machine.calculate();
}