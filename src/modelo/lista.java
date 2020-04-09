package modelo;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;

import com.google.gson.Gson;

public class lista{
	
	private static LinkedList<tarea> tareas_en_pantalla;
	
	public static LinkedList<tarea> getTareasEnPantalla() {
		
		return tareas_en_pantalla;
		
	}
	
	public static void 	IntanciarTareas() throws SQLException {
		
		LinkedList<tarea> tareas=new LinkedList<tarea>();
		
		if (database.AbrirConexion())
		{
			Statement sta=database.conn.createStatement();			
			ResultSet result=sta.executeQuery("SELECT * FROM tareas");
			
			/**
			 * La idea es que aqui se vayan agregando las posiciones a la lista
			 * la lista es de tipo tarea porque en esta clase se va a almacenar 
			 * el id de la tarea y el nombre de la tarea (re compi la cabeza buscando
			 * la forma de almacenar esta informacion pero no existe. esto es el **** java)
			 * */
			while(result.next())
			{
				System.out.println(result.getString("id_tarea") + " " + result.getString("nombre"));
				tareas.add( new tarea(Integer.parseInt(result.getString("id_tarea")), result.getString("nombre")) );
			}
			
			database.CerrarConexion();
		}
		
		tareas_en_pantalla=tareas;
		
	}
	
	public static String FiltrarTareas(String busqueda) throws SQLException {
		
		LinkedList<tarea> tareas=new LinkedList<tarea>();
		
		if(database.AbrirConexion())
		{
			Statement sta=database.conn.createStatement();
			ResultSet result=sta.executeQuery("SELECT * FROM tareas WHERE nombre LIKE '%" + busqueda + "%'");
			while(result.next())
			{
				tareas.add(new tarea(Integer.parseInt(result.getString("id_tarea")), result.getString("nombre")));
			}	
			database.CerrarConexion();
			
		}
		tarea[]array_tareas=tareas.toArray(new tarea[tareas.size()]);
		
		Gson JSON=new Gson();
		String json_string = JSON.toJson(array_tareas);
		
		System.out.println(json_string);
		
		return json_string;
		
	}
	
	public static boolean agregarTarea (String nombreTarea) {
		
		if(database.AbrirConexion()) {
			
			try {
				
				String sql = "INSERT INTO tareas (nombre) VALUES (?)";

				PreparedStatement prepare = database.conn.prepareStatement(sql);
				prepare.setString(1, nombreTarea);
				
				int result = prepare.executeUpdate();
				
				if(result> 0) {
					database.CerrarConexion();
					return true;
				}else {
					database.CerrarConexion();
					return false;
				}
				
			}catch (SQLException ex) {
				database.CerrarConexion();
				return false;
			}
			
		}else {
			return false;
		}

	}

}
