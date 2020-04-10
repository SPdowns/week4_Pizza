//back end pizza
function Pizza() {
  this.price = 10;
  this.size = []
}

Pizza.prototype.size = function () {
  if this.size === large += 2 
}


//front end

$(document).ready(function(){
  var finalPizza = new Pizza();
  $('#form-group').submit(function(event){
  event.preventDefault();
  var pizzaSize = $('input #size').val();
  console.log(finalPizza)
  })
});