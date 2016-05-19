var https = require('https');
var querystring = require('querystring');
var sha1 = require('sha1');
var config = require('config');

function do_acxiom_login(host,credentials,email){
    var req = https.request(
      {
        host: host,
        port: 443,
        path: '/api/v1/auth/oauth2/token',
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
      },
      function(res){
        var res_str = '';
        res.on('data',function(data){res_str+=data;});
        res.on('end',function(){
            res_str = JSON.parse(res_str);
            myToken = res_str.access_token;
            console.log("Login OK: "+myToken);
            findPeople(myToken,email);
        });
      }
    );
  //dataString = JSON.stringify(credentials);
    req.write(querystring.stringify(credentials));
    req.end();
}

function findPeople(token,value){
    var query = {
        'format':'json',
        'limit':'10'
    };
    var req = https.request(
      {
        host: 'test.api.acxiom.com',
      //port: 443,
        path: '/people/er/'+value,
        method: 'GET',
        headers: {'Authorization':'Bearer '+token}
      },
      function(res){
        var res_str = '';
        res.on('data',function(data){res_str+=data;});
        res.on('end',function(){
            //console.log(res_str);
            people = JSON.parse(res_str);
            if (people.hasOwnProperty("person")){
                console.info("Person Found!");
                var postal = people.person.postalContact[0];
                //console.info(postal);
                console.log(postal.firstName + " " + postal.middleName + " " + postal.lastName);
            } else {
                console.info("Person not found!");
            }
            
        });
      }
    );
    req.write(querystring.stringify());
    req.end();    
}

access = config.get('acxiom_credentials');
do_acxiom_login('login.myacxiom.com',access,'charlesjohnson2test@acxiom.com');