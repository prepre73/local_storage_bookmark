//Listen for a form submit
document.getElementById('my__form').addEventListener('submit', saveBookmark);

function saveBookmark (e){
  //Get form values
  var siteName = document.getElementById('site__name').value;
  var siteUrl = document.getElementById('site__utl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }
//Prevent form from submitting- remove this on app completion
  e.preventDefault();
}
