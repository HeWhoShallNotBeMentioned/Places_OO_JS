$(document).ready(function () {
  $("#add-landmark").click(function() {
    $("#new-landmarks").append('<div class="new-landmark">' +
    '<div class ="form-group">' +
      '<label for="new-landmark-name">Landmark Name</label>' +
      '<input type ="text" class="form-control new-landmark-name">' +
    '</div>' +
    '<div class ="form-group">' +
      '<label for="new-landmark-desc">Landmark Description</label>' +
      '<input type ="text" class="form-control new-landmark-desc">' +
    '</div>');
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedNotes = $("input#new-notes").val();
    var newPlace = { name: inputtedName, location: inputtedLocation, year: inputtedYear, notes: inputtedNotes, landmarks: []};

$(".new-landmark").each(function() {
      var inputtedLandmarkName = $(this).find("input.new-landmark-name").val();
      var inputtedLandmarkDesc = $(this).find("input.new-landmark-desc").val();

      var newLandmark = { landmarkName: inputtedLandmarkName, landmarkDesc: inputtedLandmarkDesc};
      newPlace.landmarks.push(newLandmark);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");
    $('input#new-name').val();
    $("input#new-location").val();
    $("input#new-year").val();
    $("input#new-notes").val();
    $("input#new-landmark-name").val();
    $("input#new-landmark-desc").val();

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.name);
      $(".location").text(newPlace.location);
      $(".year").text(newPlace.year);
      $(".notes").text(newPlace.notes);

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(landmark) { console.log(landmark.landmarkName);
        $("ul#landmarks").append("<li>" + "Landmark Name:  " + landmark.landmarkName + "</br>" + "Landmark Description:  " +landmark.landmarkDesc + "</li>");
      });
    });
  });
});
