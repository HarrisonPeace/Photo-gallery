// JavaScript Document

window.addEventListener('load', function() {
  baguetteBox.run('.gallery', {
    captions: true
});
});

function searchFunction() {
  // Declare variables
  var input, filter, ul, a, dataCaption, i, li;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchCriteria");
  a = ul.getElementsByTagName('a');
  li = ul.getElementsByTagName('li')

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    dataCaption = a[i].getAttribute('data-caption');
    if (dataCaption.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

