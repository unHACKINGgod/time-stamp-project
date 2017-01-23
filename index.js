var express = require('express');
 
var app = express();
var PORT = process.env.PORT || 4000;
 
app.get('/:timestamp', function(request, response) {
  var timestamp = request.params.timestamp;
  response.send('Timestamp: ' + timestamp);
});
 
app.listen(PORT, function() {
  console.log('Server is listening on port ' + PORT);
});
function getTimestampJSON(timestamp) {
	var result = {
		unix: null,
		natural: null
	};
 
	var date;
	if (!isNaN(parseInt(timestamp))) {
		date = new Date(parseInt(timestamp));
	} else {
		date = new Date(timestamp);
	}
 
	if (!isNaN(date.getTime())) {
		result.unix = date.getTime();
		result.natural = getNaturalDate(date);
	}
    
	return result;
}