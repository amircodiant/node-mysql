import express from 'express';
import orm from 'orm';
// App setup
var app = express();

// Mysql connection
orm.connect('mysql://root:@localhost/my_test', function(err, db) {
  if (err) return console.error('Connection error: ' + err);

  // connected
  // ...

  console.log('connected');
});
// Start server
// var server = app.listen('2122',()=>{
// 	console.log('listen request on port 2122');

// 	console.log('hello');
// });