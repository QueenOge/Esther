document.addEventListener("DOMContentLoaded", function() {
    // Form submission event listener
    var form = document.getElementById("commodityForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var formData = new FormData(form);
        var commodities = [];
        formData.forEach(function(value, key) {
            commodities.push({ name: key, price: parseFloat(value) });
        });
        
        generateReceipt(commodities); // Call function to generate receipt
    });
});

function generateReceipt(commodities) {
    var receiptDiv = document.getElementById("receipt");
    var totalAmount = 0;

    // Clear previous receipt items
    receiptDiv.innerHTML = '';

    // Display items on the receipt
    commodities.forEach(function(item) {
        var itemDiv = document.createElement("div");
        itemDiv.classList.add("receipt-item");
        itemDiv.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
        receiptDiv.appendChild(itemDiv);
        totalAmount += item.price;
    });

    // Display total amount
    var totalAmountElement = document.getElementById("totalAmount");
    totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}
