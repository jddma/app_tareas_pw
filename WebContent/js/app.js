function FiltrarTareas() {
	
	let ajax_obj= new XMLHttpRequest();
	ajax_obj.open("POST", "includes/filtrar_tareas.jsp");
	ajax_obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax_obj.onreadystatechange=function (){
		
		
		//Elimina todas las tareas actuales de la tabla
		let tabla=document.getElementById("tareas");
        let tareas_actuales=tabla.getElementsByTagName("tr");
        for (let i = tareas_actuales.length-1 ; i > -1; i--) 
        {
            tabla.removeChild(tareas_actuales[i]);             
        }
          
        //recorrer las tareas resultante para agregarlas a la tabla
        tareas.forEach(tarea => 
        {         
            let fila=document.createElement("tr");
            fila.setAttribute("class", "filas");

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
        
        //obtiene el valor de la busqueda y envia la solicitud
        let busqueda=document.getElementById("search").value;
        ajax_obj.send("search=" + busqueda);
		
	}
	
}