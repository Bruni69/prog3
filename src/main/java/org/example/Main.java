package org.example;

import java.time.LocalDate;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
   public static void main(String [] args) {
        Pedido p1 = new Pedido(1L, LocalDate.now(), Estado.PENDIENTE,150.99);
        System.out.println(p1);
    User u1 = new User(1L,"Bruno","Ludueña","bl@gmail.com","2267473026","123456", Rol.ADMIN);
        System.out.println(u1);
        u1.addPedidos(p1);
        System.out.println(u1);
       System.out.println(u1.getMail());
       System.out.println(u1.getRol()
       );
    }

}
