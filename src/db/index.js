import orm from 'orm';
// function setup(db) {
//   let User = db.define('user', ...);
//   let Shirt = db.define('shirt', ...);
//   Shirt.hasOne('user', User, ...);
// }
export default function(cb) {
  let opts = {
    host:     'localhost',
    database: 'my_test',
    user:     'root',
    password: '',
    protocol: 'mysql',
    port:     '3306',
    query:    {pool: true}
  };
  
  orm.connect(opts, function(err, db) {
    if (err) return cb(err);
    // setup(db);
    cb(null, db);
  });  
};