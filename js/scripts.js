//back end pizza
function Pizza() {
  this.price = 10;
  this.size = {small, medium, large};
}
// Pizza.prototype.sizeprice = function () {
  
// }
//front end

$(document).ready(function(){
  var finalPizza = new Pizza();
  $('#form-group').submit(function(event){
  event.preventDefault();
  var pizzaSize = $('#size').val();
  console.log(pizzaSize)
  })
});