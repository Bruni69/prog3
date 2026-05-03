package org.example;

import java.util.ArrayList;
import java.util.List;

public class User {
    private Long id;
    private String name;
    private String apellido;
    private String mail;
    private String celular;
    private String password;
    private Rol rol;
    private List<Pedido> pedidos = new ArrayList<>();

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", apellido='" + apellido + '\'' +
                ", mail='" + mail + '\'' +
                ", celular='" + celular + '\'' +
                ", contrasenia='" + password + '\'' +
                ", rol=" + rol +
                ", cantidad de pedidos=" + pedidos.size() +
                '}';
    }

    public User(Long id) {
    }

    public User(Long id, String name, String apellido, String mail, String celular, String password, Rol rol) {
        this.id = id;
        this.name = name;
        this.apellido = apellido;
        this.mail = mail;
        this.celular = celular;
        this.password = password;
        this.rol = rol;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
       public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void addPedidos(Pedido pedido) {
        this.pedidos.add(pedido);
    }

}
