let furnitureTotal = document.querySelector("#furniture-total");
let quantityList = document.querySelectorAll("#furnitureList .product-block .quantity");

quantityList.forEach(function(qty){
   furnitureTotal.value = Number(furnitureTotal.value) + (Number(qty.parentElement.parentElement.querySelector(".price").textContent) * Number(qty.value));
});