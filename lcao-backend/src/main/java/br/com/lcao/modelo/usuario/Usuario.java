package br.com.lcao.modelo.usuario;

import jakarta.persistence.*;

@Table(name = "tabela_usuario")
@Entity(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "nome", nullable = false, length = 255)
    private String nome;
    @Column(name = "email", nullable = false, length = 150)
    private String email;
    @Column(name = "senha", nullable = false, length = 40)
    private String senha;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
