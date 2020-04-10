//back end pizza
function Order() {
  this.price = 10
}


// Pizza.prototype.size = function () {
//   if size === large += 2 
// }
function Pizza(price) {
  this.size = size;
}

function displayPizzaOrder(pizza) {
var displayMyPizza = "'<p>Hey, Heres' a " + pizza.size + "</p>";
$("#output-final-pizza").append(displayMyPizza);
}
//front end

$(document).ready(function(){
  $('#pizza-form-id').submit(function(event){
  event.preventDefault();
  var size = $('input.size').val();
  console.log(size)
  })

});