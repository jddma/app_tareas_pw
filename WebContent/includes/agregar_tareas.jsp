<%@page import="modelo.lista"%>
<%
	
	//Agrega la nueva tarea a la base de datos
	String nombreTarea = request.getParameter("tarea");
	boolean insert = lista.agregarTarea(nombreTarea);
	
	//Obtiene la lista actulizada de tareas para actualizar la tabla
	lista.IntanciarTareas();
	out.print(lista.getJSONStringTareasEnPantalla());
	
%>