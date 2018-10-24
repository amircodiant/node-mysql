import express from 'express';
import orm from 'orm';
// App setup
const app = express();


// Mysql connection
orm.connect('mysql://root:@localhost/my_test', function(err, db) {
  if (err) return console.error('Connection error: ' + err);
  console.log('connected');

  const User = db.define('user', {
	  id:      {type: 'serial', key: true}, // the auto-incrementing primary key
	  name:    {type: 'text'},
	  surname: {type: 'text'},
	  age:     {type: 'number'},
	}, {
	  	methods : {
		    fullName: function() {
		      return this.name + ' ' + this.surname;
		    }
	  	},
	  	validations:{
	  		name: orm.enforce.unique("name already taken!")
	  	}
	});

  	db.sync(function(err) {
	    if (err) throw err;
	    // add a row to the person table
	    User.create({ name: "amir", surname: "Ansari", age: 27 }, function(err) {
	      if (err) console.log(err); return false;

	      	User.get(2, function(err, user) {
				if (err) throw err;
			   	console.log('Hi, my name is ' + user.fullName());
			})
	    });
  	});



});




// Start server
// var server = app.listen('2122',()=>{
// 	console.log('listen request on port 2122');

// 	console.log('hello');
// });