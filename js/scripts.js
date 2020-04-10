//back end pizza
function Pizza() {
  this.size = [];


  //front end
  $(document).ready(function(){
    event.preventDefault();
    $('#form-group').submit(function(event){
    var size = $("#size").val();