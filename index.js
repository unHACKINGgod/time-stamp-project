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
