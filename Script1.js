// Required variables
var myProducts = [];
var myPrices = [];
var total = 0.00;

document.getElementById("btnSend").addEventListener("click", function () {
    alert("Thank you for your email\nWe will get back to you as soon as possible!");
});

function toggleButton(button, name, price) {
    if (button.innerHTML === "Add to Basket") {
        button.innerHTML = "Remove from Basket";
        button.classList.add("remove-button");
        addToBasket(name, price);
    } else {
        button.innerHTML = "Add to Basket";
        button.classList.remove("remove-button");
        removeFromBasket(name, price);
    }
    displayBasket();
    displayTotal();
}

function addToBasket(name, price) {
    myProducts.push(name);
    myPrices.push(price);
}

function removeFromBasket(name, price) {
    // Remove current product details from arrays
    for (var i = 0; i < myProducts.length; i++) {
        if (name === myProducts[i]) {
            myProducts.splice(i, 1);
            myPrices.splice(i, 1);
            break;
        }
    }
}

function displayBasket() {
    var basketElement = document.getElementById("basket");
    basketElement.innerHTML = "<h2>Basket</h2>";

    for (var i = 0; i < myProducts.length; i++) {
        basketElement.innerHTML += myProducts[i] + " - €" + myPrices[i].toFixed(2) + "<br>";
    }
}

function displayTotal() {
    // Display total on webpage (DOM)
    var totalElement = document.getElementById("total");
    total = myPrices.reduce((acc, price) => acc + price, 0);
    totalElement.innerHTML = "Total price of purchase: €" + total.toFixed(2);
}

function resetButtons() {
    var buttons = document.querySelectorAll('.remove-button');
    buttons.forEach(button => {
        button.innerHTML = "Add to Basket";
        button.classList.remove("remove-button");
    });
}

function checkout() {
    // Build displayString to display in alert box
    var displayString = "";
    if (myProducts.length === 0) {
        alert("Thank you for visiting us. Hope to see you again!");
    } else {
        displayString = "Thank you for your purchase of:\n\n";
        for (var i = 0; i < myProducts.length; i++) {
            displayString += myProducts[i] + " - €" + myPrices[i].toFixed(2) + "\n";
        }
        displayString += "\nYour total is: €" + total.toFixed(2);

        // Show displayString on screen
        alert(displayString);

        // Clear the basket and total
        myProducts = [];
        myPrices = [];
        total = 0;

        // Update the display
        displayBasket();
        displayTotal();
        resetButtons();
    }
}
