// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE

$(document).ready(function() {

  $('#submit_button').on('click', function(event) {
    event.preventDefault();
    search = $('#search-keyword').val();
    console.log(search);
    dropdownPick = $('#search-type').val();
    console.log(dropdownPick);

    $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + search +'&type=' + dropdownPick
    }).done(function(response) {
      $.each(response.albums.items, function (index, item) {
        console.log(item);
      $('#results').append("<li>" + item.name + "</li>")
    })
    })
  })
});
