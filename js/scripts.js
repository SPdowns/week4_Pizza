//back end pizza
function Order() {
  this.price = 10
}

function Pizza(size) {
  this.size = size;
}

function displayPizzaOrder(pizza) {
var displayMyPizza = "<p>Hey, Heres a " + pizza.size + "</p>";
$("#output-final-pizza").html(displayMyPizza);
}
//front end

$(document).ready(function(){
  $('#pizza-form-id').submit(function(event){
  event.preventDefault();
  var size = $("input[name=size]:checked").val();

  var stepLastPizza = 
  displayPizzaOrder(size)
  })

});