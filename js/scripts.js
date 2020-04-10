//back end pizza
function Pizza(size, cheese) {
  this.size = size;
  this.cheese = cheese;
  this.topping = [];
}

function Toppings() {
  this.pepperoni = pepperoni;
  this.olive = olive;
  this.mushroom = mushroom;
}
console.log(Toppings)
Pizza.prototype.calcPrice = function (){
  var price = 10;
  if (this.size === "Small") {
    price -= 3
  } if (this.size === "Large") {
    price += 3
  } if (this.cheese === "Extra Cheese") {
    price += 3
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

  var pepperoni = $("#pepperoni:checked").val();
  var olive = $("#olive:checked").val();
  var mushroom = $("#mushroom:checked").val();

  var toppings = new Toppings(pepperoni, olive, mushroom)
  console.log(toppings)
  var calcPizza = new Pizza(size, cheese, toppings)
  calcPizza.calcPrice();
  displayPizzaOrder(calcPizza)
  })

});