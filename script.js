//your code here
function updateTotal() {
    // Get all elements with data-ns-test="prices"
    const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

    // Calculate the total price
    let totalPrice = 0;
    priceElements.forEach(element => {
        totalPrice += parseFloat(element.textContent);
    });

    // Create a new row for the total
    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    totalCell1.textContent = 'Total Price';
    totalRow.appendChild(totalCell1);

    const totalCell2 = document.createElement('td');
    totalCell2.setAttribute('data-ns-test', 'grandTotal');
    totalCell2.textContent = totalPrice.toFixed(2);
    totalRow.appendChild(totalCell2);

    // Add the total row to the table
    const table = document.getElementById('groceryTable');
    table.appendChild(totalRow);
}

// Call the updateTotal function
updateTotal();