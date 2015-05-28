// https://api.spotify.com/v1/search?q=SOMETHINGHERE&type=SOMETHINGHERE
$(document).ready(function() {
  
  // var getSearchItem = $('#search-keyword');
  // var getSearchType = $('search-type');

  $('#submit_button').on('click', function(event) {
    search = $('#search-keyword').val();
    console.log(search);
    dropdownPick = $('#search-type').val();
    console.log(dropdownPick);
  })
});





//   $('#submit_button').on('click', function(event) {
//     search = $('#search-keyword').val();
//     console.log(search);
//     $.ajax({
//       type: 'GET',
//       url: 'https://api.spotify.com/v1/search?q=tania%20bowra&type=' + search
//     })
//     .done(function(response) {
//       var searches = [];
//       debugger;
//   })
// });
// }