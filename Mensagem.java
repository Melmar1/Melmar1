import java.util.Scanner;
public class Mensagem 
{
	public void MostraTexto1()
	{
	System.out.println("Estamos no Preve");
	}
	public void MostraTexto2()
	{
	 Scanner entrada = new Scanner (System.in);
	 System.out.print ("Qual texto: ");
	 String texto;
	 texto = entrada.nextLine();
	 System.out.println(texto);
	 }  
	 
	 
	 public int MostraRetorno()
	 {
	 	int x;
	 	x = 5*3;
	 	return x;
	 }
}
	 