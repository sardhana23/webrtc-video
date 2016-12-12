// functions.js/
var bcrypt = require('bcryptjs'),
    Q = require('q');
    //config = require('./config.js'), //config file contains all tokens and other private info
    //db = require('orchestrate')(config.db); //config.db holds Orchestrate token

//used in local-signup strategy
/*
exports.localReg = function (username, password) {
  var deferred = Q.defer();
  var hash = bcrypt.hashSync(password, 8);
  var user = {
    "username": username,
    "password": hash
  }
  //check if username is already assigned in our database
  db.get('local-users', username)
  .then(function (result){ //case in which user already exists in db
    console.log('username already exists');
    deferred.resolve(false); //username already exists
  })
  .fail(function (result) {//case in which user does not already exist in db
      console.log(result.body);
      if(!(username == 'soma2307' || username == 'manasi1710')) {
		    console.log("tried creating username for user : " + username);
		    console.log(user);
    		deferred.resolve(false); //username already exists
	    }
      else if (result.body.message == 'The requested items could not be found.'){
        console.log('Username is free for use');
        db.put('local-users', username, user)
        .then(function () {
          console.log("USER: " + user);
          deferred.resolve(user);
        })
        .fail(function (err) {
          console.log("PUT FAIL:" + err.body);
          deferred.reject(new Error(err.body));
        });
      } else {
        deferred.reject(new Error(result.body));
      }
  });

  return deferred.promise;
};
*/

//check if user exists
//if user exists check if passwords match (use bcrypt.compareSync(password, hash); // true where 'hash' is password in DB)
//if password matches take into website
//if user doesn't exist or password doesn't match tell them it failed
exports.localAuth = function (username, password) {
  var body = {
    "username": username,
    "password": password
  }

  var deferred = Q.defer();
  
  if((username == "soma2307" && password = "$2a$08$GFKkiuar70.BdesupURdF.iPQX.nFaPI19joNoViAjhmo3PcuZsSy") || (username == "manasi1710" && password == "$2a$08$ztm/PEuPFW/bemqFQYTVtez3OUi0AodH5ah.Ktn8DOFq64W2V96Ni")) {
    console.log(result.body);
    deferred.resolve(body);
  } else {
    deferred.resolve(false);
  }

  return deferred.promise;
}
