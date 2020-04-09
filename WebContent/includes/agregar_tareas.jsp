<%@page import="modelo.lista"%>
<%
	
	String nombreTarea = request.getParameter("tarea");
	boolean insert = lista.agregarTarea(nombreTarea);
	
%>