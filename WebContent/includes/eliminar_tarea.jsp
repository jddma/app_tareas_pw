<%@page import="modelo.lista"%>
<%

	int id=Integer.parseInt(request.getParameter("id"));
	lista.EliminarTarea(id);

	//Obtiene la lista actulizada de tareas para actualizar la tabla
	lista.IntanciarTareas();
	out.print(lista.getJSONStringTareasEnPantalla());

%>