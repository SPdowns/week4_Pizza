//back end pizza
function Order(price) {
  this.price = price
}

function Pizza(size, cheese) {
  this.size = size;
  this.size = cheese;
}

Pizza.prototype.calcPrice = function (){
  var price = 10;
  return price;
}
function displayPizzaOrder(pizza) {
var displayMyPizza = "<p>Hey, Heres a " + pizza.size + pizza.cheese + "</p>";
$("#output-final-pizza").html(displayMyPizza);
}
//front end

$(document).ready(function(){
  $('#pizza-form-id').submit(function(event){
  event.preventDefault();
  var size = $("input[name=size]:checked").val();
  var cheese = $("input[name=cheese]:checked").val();

  var calcPizza = new Pizza(size, cheese)
  displayPizzaOrder(calcPizza)
  })

});