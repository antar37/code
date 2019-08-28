let agExpoForm = document.querySelector("#ag-expo-form");
let furnitureTotal = document.querySelector("#furnitureTotal");
let quantityList = document.querySelectorAll("#furnitureList .product-block .quantity");

// Event Listener
agExpoForm.addEventListener("input", updateForm);

function updateForm(){
   quantityList.forEach(function(qty){
      furnitureTotal.value = Number(furnitureTotal.value) + (Number(qty.parentElement.parentElement.querySelector(".price").textContent) * Number(qty.value));
   });
}