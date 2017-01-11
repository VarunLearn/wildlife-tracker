$(document).ready(function() {
  $("#calendar").fullCalendar({
    events: "/animals/" + $("#a_id").val() + "/get_events",
    eventClick: function(event) {
    if (event.url) {
        window.open(event.url);
        return false;
      }
    },

    header:{
      left:   'title',
      center: 'month, basicWeek, basicDay',
      right:  'today prev,next'
  }
  });
});
