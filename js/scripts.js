//back end pizza
function Pizza(size, cheese) {
  this.size = size;
  this.cheese = cheese;
  
  this.pepperoni = pepperoni;
  this.olives = olives;
  this.mushrooms = mushrooms;
}
Pizza.prototype.calcPrice = function (){
  var price = 10;
  if (this.size === "Small") {
    price -= 3
  } if (this.size === "Large") {
    price += 3
  } if (this.cheese === "Extra Cheese") {
    price += 3
  } if (this.pepperoni === true) {
    price += 1
  }
  return price;
}
function displayPizzaOrder(pizza) {
var displayMyPizza = "<p>Hey, Heres a " + pizza.size + " " + pizza.cheese + " Pizza for " + pizza.calcPrice() + "</p>";
$("#output-final-pizza").html(displayMyPizza);
console.log(displayMyPizza)
}


//front end

$(document).ready(function(){
  $('#pizza-form-id').submit(function(event){
  event.preventDefault();
  var size = $("input[name=size]:checked").val();
  var cheese = $("input[name=cheese]:checked").val();

  var pepperoni = $("input[name=topping]:checked");
  var olives = $("input[name=topping]:checked");
  var mushrooms = $("input[name=mushrooms]:checked");

  var calcPizza = new Pizza(size, cheese, pepperoni, olives, mushrooms)
  calcPizza.calcPrice();
  displayPizzaOrder(calcPizza)
  })

});