//Check if the geolocation API exists
if (navigator.geolocation) {
    //true
    alert('Lets get the location (placeholder)');
  } else {
    //false
    alert('geolocation not available?! What browser is this?');
    // prompt for city?
  }

if (navigator.geolocation) {
    // Request the current position
    // If successful, call getPosSuccess; On error, call getPosErr
    navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
} else {
    alert('geolocation not available?! What year is this?');
    // IP address or prompt for city?
}

// getCurrentPosition: Successful return
function getPosSuccess(pos) {
  // Get the coordinates and accuracy properties from the returned object
    var geoLat = pos.coords.latitude.toFixed(5);
    var geoLng = pos.coords.longitude.toFixed(5);
    var geoAcc = pos.coords.accuracy.toFixed(1);

    //Create an iframe and use the current location data
    var iSource = "https://forecast.io/embed/#lat=" + geoLat + "&lon=" + geoLng + "&name=Woot&color=#00aaff";
    $('<iframe>') // Creates the element
    .attr('src', iSource) // Sets the attribute spry:region="myDs"
    .attr('height', 245) // Set the height
    .attr('width', "100%") // Set the width
    .appendTo('#id-weather'); // Append to an existing element ID
}

// getCurrentPosition: Error returned
function getPosErr(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case err.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case err.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}