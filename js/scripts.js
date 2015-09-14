$(document).ready(function () {
  $("#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var newPlace = { name: inputtedName};
debugger;
    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");
    $('input#new-name').val();

    $(".place").last().click(function() {
      $("#show-place").show
    });
  });
});
