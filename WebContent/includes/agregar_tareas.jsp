<%@page import="java.util.LinkedList"%>
<%@page import="com.google.gson.Gson"%>
<%@page import="modelo.lista"%>
<%@page import="modelo.tarea"%>
<%
	
	//Agrega la nueva tarea a la base de datos
	String nombreTarea = request.getParameter("tarea");
	boolean insert = lista.agregarTarea(nombreTarea);
	
	//Obtiene la lista actulizada de tareas para actualizar la tabla
	lista.IntanciarTareas();
	LinkedList<tarea> tareas=lista.getTareasEnPantalla();
	
	//Pasa las tareas a un string de JSON	
	Gson JSON=new Gson();
	tarea[]array_tareas=tareas.toArray(new tarea[tareas.size()]);
	String json_string_tareas=JSON.toJson(array_tareas);
	out.print(json_string_tareas);
	
%>