document.addEventListener("DOMContentLoaded", function() {
    function loadDataAndDisplay() {
        d3.csv("data/purchase_orders.csv").then(function(data) {
            const ul = d3.select("#purchase-orders");

            data.forEach(function(d) {
                ul.append("li").text(`${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: ${d.purchaseAmount}`);
            });
        }).catch(function(error) {
            console.error("Error loading the CSV file: ", error);
        });
    }

    loadDataAndDisplay();
});