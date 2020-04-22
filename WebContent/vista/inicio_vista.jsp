
<!DOCTYPE html>
<%@page import="modelo.lista"%>
<%@page import="modelo.tarea"%>
<%@page import="java.util.LinkedList"%>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="js/app.js"></script>    
        <link rel="stylesheet" href="css/bootstrap.min.css">      
        <title>Aplicacion de tareas</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="" class="navbar-brand">Task App</a>
            <ul class="navbar-nav ml-auto">
                <form class="form-inline my-2 my-lg-0">
                    <input type="search" class="form-control mr-sm-2" name="search" id="search" onkeyup="FiltrarTareas()" placeholder="Busca tu tarea">
                </form>
            </ul>
        </nav>
        <div class="container p-4">
            <div class="row">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form id="task-form">
                                <div class="form-group">
                                    <input id="tarea" type="text" class="form-control" id="nombre" autocomplete="off" placeholder="Nombre de la tarea">
                                </div>
                                <input type="button" value="Agregar" class="btn btn-primary btn-block text-center" onclick="agregarTarea()">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered table-sm text-center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>&nbsp</th>
                            </tr>
                        </thead>
                        <tbody id="tareas">
                            <%             
	                            try{
	                            	for (tarea obj : lista.getTareasEnPantalla())
		                            {
		                            	out.print("\r\t\t\t\t\t\t\t<tr>\n"  
		                            			+ "\r\t\t\t\t\t\t\t\t<td>" + obj.getId() + "</td>\n" + "\r\t\t\t\t\t\t\t\t<td>" + obj.getNombre() + "</td>\n" + "\r\t\t\t\t\t\t\t\t<td class='text-center'><input type='button' class='btn btn-danger' onclick='EliminarTarea(" + obj.getId() + ")' value='Eliminar'></td>\n"	
		                            			+ "\r\t\t\t\t\t\t\t</tr>\n");
		                            }
	                            }catch(Exception ex){
	                            	System.out.println(ex);
	                            }
                            %>
                        </tbody>
                    </table>
                </div>            
            </div>
        </div>
    </body>
</html>