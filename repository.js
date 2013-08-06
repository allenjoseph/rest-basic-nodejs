exports.tareaRepository = (function (){
	var tareas = [];
	var siguienteId = 1;

	var findIndex = function (id){
		var index = null;
		tareas.forEach(function(item, key){
			if(item.tareaId == id){
				index = key;
			}
		});
		if(index == null){
			throw new Error('indice no encontrado');
		}
		return index;
	};

	return {
		find : function(id){
			var tarea = tareas.filter(function(item){
				return item.tareaId == id;
			})[0];
			if(tarea == null){
				throw new Error('tarea no encontrada');
			}
			return tarea;
		},
		save : function(tarea){
			if(tarea.tareaId == null || tarea.tareaId == 0){
				tarea.tareaId = siguienteId;
				tareas.push(tarea);
				siguienteId++;
			} else{
				var index = findIndex(tarea.tareaId);
				tareas[index] = tarea;
			}
		},
		remove : function(id){
			var index = findIndex(id);
			console.log(index);
			tareas.splice(index,1);
		},
		findAll : function(){
			return tareas;
		},
	}
})();