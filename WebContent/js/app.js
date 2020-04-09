
function agregarTarea(){
	
	let obj = new XMLHttpRequest();
	obj.open("POST", "includes/agregar_tareas.jsp", true);
	obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	 var tarea = document.getElementById("tarea").value;
	obj.send("tarea=" + tarea);
}

function FiltrarTareas() {
	
	let obj=new XMLHttpRequest();
    obj.open("POST","includes/filtrar_tareas.jsp",true);
    obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    obj.onreadystatechange=function (){

        //Elimina las tareas mostradas en la tabla
        let tabla=document.getElementById("tareas");
        let tareas_actuales=tabla.getElementsByTagName("tr");
        for (let i = tareas_actuales.length-1 ; i > -1; i--) 
        {
            tabla.removeChild(tareas_actuales[i]);
                    
        }

        //Convierte el string de json a un objeto de javascript
        let tareas=JSON.parse(obj.responseText);
        tareas.forEach(tarea => 
        {      
            let fila=document.createElement("tr");

            let col1=document.createElement("td");
            let text1=document.createTextNode(tarea.id);
            col1.appendChild(text1);

            let col2=document.createElement("td");
            let text2=document.createTextNode(tarea.nombre);
            col2.appendChild(text2);

            fila.appendChild(col1);
            fila.appendChild(col2);

            tabla.appendChild(fila);
        });
    }

    let busqueda=document.getElementById("search").value;
    obj.send("search=" + busqueda);
	
}