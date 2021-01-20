$(document).ready(function() {
  $("button#start").click(function() {
    const inputValue = $("#formResponse").val();
    let outputValue = parseInt(inputValue, 2);
    alert(outputValue);
  });
});