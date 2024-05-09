package br.com.lcao.modelo.lembrete;

import br.com.lcao.modelo.usuario.Usuario;
import jakarta.persistence.*;

@Table(name = "tabela_lembrete")
@Entity(name = "lembrete")
public class Lembrete {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "titulo", nullable = false, length = 255)
    private String titulo;
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;
    @Column(name = "data", nullable = false, length = 255)
    private String data;
    @Column(name = "prioridade", nullable = false, length = 15)
    private String prioridade;
    @Column(name = "modelo", nullable = false, length = 40)
    private String modelo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(String prioridade) {
        this.prioridade = prioridade;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
