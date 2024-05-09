package br.com.lcao.modelo.usuario;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Table(name = "tabela_usuario")
@Entity(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "nome", nullable = false)
    private String nome;
    @Column(name = "email", nullable = false, length = 150)
    private String email;
    @Column(name = "senha", nullable = false, length = 40)
    private String senha;
}
