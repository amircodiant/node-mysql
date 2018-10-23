import express from 'express';
import orm from 'orm';
// App setup
var app = express();

// Mysql connection
app.use(orm.express("mysql://root:@localhost/my_test	", {
	// define: function (db, models, next) {
	// 	models.person = db.define("person", { ... });
	// 	next();
	// }
}));
// Start server
var server = app.listen('2122',()=>{
	console.log('listen request on port 2122');

	console.log('hello');
})