
function agregarTarea(){
	
	let obj=new XMLHttpRequest();
	obj.open("POST","includes/agregar_tareas.jsp",true);
	obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	obj.onreadystatechange=function (){
	       
    	RefrescarTareas(obj.responseText);  
    	console.log(obj.responseText);
        
    }
	
	let tarea = document.getElementById("tarea").value;
	obj.send("tarea=" + tarea);
	
	document.getElementById("tarea").value="";
}

function EliminarTarea(id) {
	
	let obj=new XMLHttpRequest();
	obj.open("POST","includes/eliminar_tarea.jsp",true);
	obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	obj.onreadystatechange=function (){
	       
    	RefrescarTareas(obj.responseText);  
    	console.log(obj.responseText);
        
    }
	
	obj.send("id=" + id);
	
}

function FiltrarTareas() {
	
	let obj=new XMLHttpRequest();
    obj.open("POST","includes/filtrar_tareas.jsp",true);
    obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    obj.onreadystatechange=function (){
       
    	RefrescarTareas(obj.responseText);  
    	console.log(obj.responseText);
        
    }

    let busqueda=document.getElementById("search").value;
    obj.send("search=" + busqueda);
	
}

function RefrescarTareas(tareas_en_pantalla) {
	
	//Elimina las tareas mostradas en la tabla
    let tabla=document.getElementById("tareas");
    let tareas_actuales=tabla.getElementsByTagName("tr");
    for (let i = tareas_actuales.length-1 ; i > -1; i--) 
    {
        tabla.removeChild(tareas_actuales[i]);              
    }
	
	//Convierte el string de json a un objeto de javascript
    let tareas=JSON.parse(tareas_en_pantalla);
    tareas.forEach(tarea => 
    {      
        let fila=document.createElement("tr");

        let col1=document.createElement("td");
        let text1=document.createTextNode(tarea.id);
        col1.appendChild(text1);

        let col2=document.createElement("td");
        let text2=document.createTextNode(tarea.nombre);
        col2.appendChild(text2);
        
        let col3=document.createElement("td");
        let button=document.createElement("input");
        button.setAttribute("type", "button");;
        button.setAttribute("class", "btn btn-danger");
        button.setAttribute("onclick", "EliminarTarea(" + tarea.id+ ")");
        button.setAttribute("value", "Eliminar");
        col3.appendChild(button);

        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);

        tabla.appendChild(fila);
    });
	
}