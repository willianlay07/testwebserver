var express 		= require('express');
var app 			= express();
var PORT 			= process.env.PORT || 3000;


var middleware		= {
		requireAuthentication: function(req, res, next){
			console.log('Private route hit!');
			next();
		},
		logger: function(req, res, next){
			console.log('Requests '+ new Date().toString() +' '+req.method+' '+req.originalUrl);
			next();
		}
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.use(express.static(__dirname+'/public'));

// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us!');
})


app.listen(PORT, function(){
	console.log('Server is running now.')
});