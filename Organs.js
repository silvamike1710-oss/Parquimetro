
function calculateParking() {


        //const means this is a constant that cannot be changed
    const payment = Number (document.getElementById("payment").value);
    const message = document.getElementById("message");

        //if the payment is less thant $1 the code stops
    if (payment < 1) {
        message.textContent = "minimum payment is $1 for 30mins";
        return;
    }

        //creates those things
    let minutes;
    let cost;

        //the pricing stuff

        //this checks if its 1.75 for 60, if its not, its 1 for 30min
    if (payment >= 1.75) {
        minutes = 60;
        cost= 1.75;
    } else {
        minutes = 30;
        cost = 1.00;
    }

        //the bigger payments
    if (payment >= 3.50) {
        minutes = 120;
        cost = 3.50;
    }
    
    const change = payment - cost;


        //annoying to understand but it works
    message.textContent =
    "parking time " + minutes + 
    " minutes.change: $" + change.toFixed(2);


}