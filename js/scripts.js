//back end pizza
function Order() {
  this.size = size
}
console.log(Pizza)

// Pizza.prototype.size = function () {
//   if size === large += 2 
// }
function Pizza(price) {
  this.price = 10;
}

function displayPizzaOrder(pizza) {
var displayMyPizza = "<p>Hey, Heres a " + pizza.size + "</p>";
$("#output-final-pizza").html(displayMyPizza);
console.log("line 18", displayMyPizza)
}

//front end

$(document).ready(function(){
  $('#pizza-form-id').submit(function(event){
  event.preventDefault();
  var pizzaSize = $('input#size').val();
  
  console.log(pizzaSize)
  })
});