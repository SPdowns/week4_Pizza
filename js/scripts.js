//back end pizza
function Pizza(size, cheese) {
  this.size = size;
  this.cheese = cheese;
}

Pizza.prototype.calcPrice = function (){
  var price = 10;
  if (this.cheese === "Extra Cheese") {
    price += 3
  }
  return price;
}
function displayPizzaOrder(pizza) {
var displayMyPizza = "<p>Hey, Heres a " + pizza.size + " " + pizza.cheese + " Pizza for </p>";
$("#output-final-pizza").html(displayMyPizza);
console.log(displayMyPizza)
}
//front end

$(document).ready(function(){
  $('#pizza-form-id').submit(function(event){
  event.preventDefault();
  var size = $("input[name=size]:checked").val();
  var cheese = $("input[name=cheese]:checked").val();
  var calcPizza = new Pizza(size, cheese)
  calcPizza.calcPrice();
  displayPizzaOrder(calcPizza)
  })

});