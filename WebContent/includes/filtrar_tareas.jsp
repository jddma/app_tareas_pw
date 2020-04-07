<%@page import="modelo.lista"%>
<%@page import="modelo.tarea"%>
<%

	String busqueda=request.getParameter("search");
	String json_tareas=lista.FiltrarTareas(busqueda);
	out.print(json_tareas);
	
	
%>