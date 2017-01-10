$(document).ready(function() {
  $("#a_add_sighting").on("click", function() {
    var newSighting = {
      "sighting": {
        "date": $("#start_date_day").val() + "-" + $("#start_date_month").val() + "-" + $("#start_date_year").val(),
        "time": $("#start_time_hour").val() + ":" + $("#start_time_minute").val(),
        "latitude": $("#a_add_lat").val(),
        "longitude": $("#a_add_lng").val(),
        "animal_id": $("#a_id").val()
      }
    };

    $.ajax({
      dataType: 'json',
      url: '/sightings',
      method: 'POST',
      data: newSighting,
      success: function(data) {
        alert("Success!");
        $("#sightings_list").append("<tr><td>"+data.date+"</td><td>"+data.time+"</td><td>"+data.latitude+"</td><td>"+data.longitude+"</td></tr>")
      },
      error: function(jqXHR, testStatus, errorThrown) {
        alert("Whatever you want and the error thrown " + errorThrown);
      }
    });

  });
});

//"<tr><td>"+data.date+"</td><td>"+data.time+"</td><td>"+data.latitude+"</td><td>"+data.longitude+"</td><td>"+data.animal_id+"</td></tr>"
