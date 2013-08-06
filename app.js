var express = require('express');
var repository = require('./repository');

var app = express();
var tareaRepository = repository.tareaRepository;

app.configure(function(){
	//bodyParser es usuado para parsear JSON obtenidos en las peticiones 
	app.use(express.bodyParser());
});

app.get('/tareas', function(req,res){
	res.json({tareas : tareaRepository.findAll()})
});

app.get('/tareas/:id', function(req,res){
	var tareaId = req.params.id;
	try{
		res.json(tareaRepository.find(tareaId));
	} catch(err){
		console.log(err.message);
		res.send(404);
	}
});

app.post('/tareas',function(req,res){
	var tareapost = req.body;
	var tarea = {
		titulo : tareapost.titulo || 'Default titulo',
		descripcion : tareapost.descripcion || 'Default descripcion',
		estado : tareapost.estado || 'no completada'		
	};
	tareaRepository.save(tarea);
	res.send(200);
});

app.put('/tareas/:id',function(req,res){
	var tareaput = req.body;
	var tareaId = req.params.id;
	try{
		var tareaPersistida = tareaRepository.find(tareaId);
		var tarea = {
			tareaId : tareaPersistida.tareaId,
			titulo : tareaput.titulo || tareaPersistida.titulo,
			descripcion : tareaput.descripcion || tareaPersistida.descripcion,
			estado : tareaput.estado || tareaPersistida.estado
		};
		tareaRepository.save(tarea)
		res.send(200);
	} catch(err){
		console.log(err.message);
		res.send(404);
	}
});

app.delete('/tareas/:id',function(req,res){
	try{
		var tareaId = req.params.id;
		console.log(tareaId);
		tareaRepository.remove(tareaId);
		res.send(200);
	} catch(err){
		console.log(err.message);
		res.send(404);
	}
});

app.listen(3000,function(){
	console.log('Rest App : escuchando en el puerto 3000');	
});