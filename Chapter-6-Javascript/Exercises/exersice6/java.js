function calculateTotal() {

//input vaulues 
var CostPerLiter = parseFloat(document.getElementById('Cost').value)
var LiterPurchased= parseFloat(document.getElementById('Liters').value)

//total cost
var TotalCost= CostPerLiter *LiterPurchased;

// showing total cost 
document.getElementById('totalCost').textContent='TotalCost: $'+TotalCost.toFixed (2); }