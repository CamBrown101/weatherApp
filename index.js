const toggleBorder = () => {
  $('input').toggleClass('input-border');
};

$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.search-form').fadeOut(500);

    // retrieving the value from the search field

    let value = $('.search-input').val();
    const key = 'dd95a0a10ba21304e40bb35cca53552a';
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=${key}`;
    console.log(value);
    let data = $.get(`${url}`, function (data) {
      let html =
        `<div class="results-wrapper">` +
        `<div class="search-display">` +
        `<div class="flex-column">` +
        `<h2 class="city-name"> ${data.name}, ${data.sys.country} </h2>` +
        `<h2 class="weather"> ${data.weather[0].description}</h2>` +
        `<div class="temperature-row">` +
        `<h4 class="temperature">${data.main.temp}°C<h4>` +
        `</div>` +
        `</div>` +
        `<div class="daily">` +
        `<h4 class="daily-low"> Low: ${data.main.temp_min}°C</h4>` +
        `<h4 class="daily-high"> High: ${data.main.temp_max}°C</h4>` +
        `<h4 class="wind-speed"> Wind: ${data.wind.speed} km/h</h4>` +
        `</div>` +
        `</div>`;

      console.log(data);
      console.log(html);
      $('.results-wrapper').replaceWith(html);
    });
    //displaying results

    $('.results').delay(500).fadeIn(500);
  });
  //toggling search input border
  $('.search-input').on('focus', function () {
    toggleBorder();
  });
  $('.search-input').on('focusout', function () {
    toggleBorder();
  });
  //Search Again button
  $('.search-again').on('click', function () {
    //Clear Display
    $('.results').fadeOut(500);
    //Clear Results
    $('.results').remove('.search-display');
    //Display Search Bar
    $('.search-form').delay(500).fadeIn(500);
    $('.search-display').empty('.results-wrapper');
  });
});
