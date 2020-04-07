package modelo;

import java.sql.Connection;
import java.sql.DriverManager;

public class database {
	
	public static Connection conn;
	
	public static boolean AbrirConexion() {
		
		try 
		{
			Class.forName("com.mysql.jdbc.Driver");
			conn=DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/app_tareas", "admin", "admin6673");
			return true;
		} 
		catch (Exception e) 
		{
			System.out.println(e);
			return false;
		}
		
	}
	
	public static boolean CerrarConexion() {
		
		try
		{
			conn.close();
			return true;
		}
		catch (Exception e) 
		{
			return false;
		}
		
	}

}
