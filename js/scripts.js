$(document).ready(function () {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedNotes = $("input#new-notes").val();
    var newPlace = { name: inputtedName, location: inputtedLocation, year: inputtedYear, notes: inputtedNotes};


    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");
    $('input#new-name').val();
    $("input#new-location").val();
    $("input#new-year").val();
    $("input#new-notes").val();

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.name);
      $(".location").text(newPlace.location);
      $(".year").text(newPlace.year);
      $(".notes").text(newPlace.notes);
    });
  });
});
