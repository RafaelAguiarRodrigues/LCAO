package br.com.lcao.modelo.lembrete;

import br.com.lcao.modelo.usuario.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Table(name = "tabela_lembrete")
@Entity(name = "lembrete")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Lembrete {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "titulo", nullable = false)
    private String titulo;
    @Column(name = "descricao", columnDefinition = "TEXT")
    private String descricao;
    @Column(name = "data", nullable = false)
    private String data;
    @Column(name = "prioridade", nullable = false, length = 15)
    private String prioridade;
    @Column(name = "modelo", nullable = false, length = 40)
    private String modelo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}
