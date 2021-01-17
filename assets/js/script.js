$(document).ready(function () {
  // set today's date in header
  $('#currentDay').text(moment().format('dddd, MMMM Do'))

  // get data from localStorage, if exists
  for (var i = 9; i < 18; i++) {
    if (i < 12) {
      // set AM or PM
      var time = i.toString().concat('AM');
      // sets id to find corresponding textarea
      id = i;
    }
    else if (i === 12) {
      var time = '12PM';
      id = 12;
    }
    else {
      var time = (i - 12).toString().concat('PM');
      id = i - 12;
    }

    // write loaded data to html
    $('#' + id).text(localStorage.getItem(time));

    // set get current hour to set background color of hour rows
    var currentHour = moment().format('HH');
    if (i < currentHour) $('#' + id).addClass('past');
    else if (i === currentHour) $('#' + id).addClass('present');
    else $('#' + id).addClass('future');
  }

  // collect user input in description field and corresponding hour
  $('.saveBtn').on('click', function () {
    var time = $(this).siblings('.hour').text();
    var description = $(this).siblings('.description').val();

    // save collected data to localStorage
    localStorage.setItem(time, description);
  })
});