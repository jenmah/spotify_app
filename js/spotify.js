// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE

// $(document).ready(function() {

//   $('#submit_button').on('click', function(event) {
//     event.preventDefault();
//     search = $('#search-keyword').val();
//     console.log(search);
//     dropdownPick = $('#search-type').val();
//     console.log(dropdownPick);

//     $.ajax({
//       type: 'GET',
//       url: 'https://api.spotify.com/v1/search?q=' + search +'&type=' + dropdownPick
//     }).done(function(response) {
//       $.each(response.albums.items, function (index, item) {
//         console.log(item);
//       $('#results').append("<li>" + item.name + "</li>")
//     })
//     })
//   })
// });




// Jeremy's Solution:

$(document).ready(function() {

  // declare variables
  var form = $('#search');
  var input = $('#search-keyword');
  var select = $('#search-type');
  var results = $('#results');

  // add event listeners to the elements
  form.on('submit', search);
  select.on('change', search);

  // when someone clicks submit then make ajax request to spotify with the input
  function search(event) {
    event.preventDefault();

    var userInput = input.val();
    var searchType = $(':selected').val();
    $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + userInput + '&type=' +searchType
    })
    .done(function(response) {
      results.empty();
      render(response, searchType);
     });
    }

    function render(response, searchType) {
    var data = response[searchType + 's'].items;

    $.each(data, function(index, value) {
      if (searchType === 'track') {
        var trackCardTemplate = '<div class="track-card">';
        trackCardTemplate += '<img src="' + value.album.images[1].url + '" alt="">';
        trackCardTemplate += '<audio src="' + value.preview_url + '" controls></audio>';
        trackCardTemplate += '</div>';

        results.hide().append(trackCardTemplate).fadeIn('slow');
      } else {
        results.hide().append('<li>' + value.name + '</li>').fadeIn('slow');
      }
    });
  }

});