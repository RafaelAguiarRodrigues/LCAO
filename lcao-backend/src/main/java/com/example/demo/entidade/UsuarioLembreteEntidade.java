package com.example.demo.entidade;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "tabelausuariolembrete")
@IdClass(UsuarioLembreteEntidade.UsuarioLembreteId.class)
public class UsuarioLembreteEntidade {
    @Id
    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private UsuarioEntidade idUsuario;

    @Id
    @ManyToOne
    @JoinColumn(name = "idLembrete")
    private LembreteEntidade idLembrete;

    class UsuarioLembreteId implements Serializable {
        private Integer idUsuario;
        private Integer idLembrete;

        public Integer getIdUsuario() {
            return idUsuario;
        }

        public void setIdUsuario(Integer idUsuario) {
            this.idUsuario = idUsuario;
        }

        public Integer getIdLembrete() {
            return idLembrete;
        }

        public void setIdLembrete(Integer idLembrete) {
            this.idLembrete = idLembrete;
        }
    }

    public UsuarioEntidade getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(UsuarioEntidade idUsuario) {
        this.idUsuario = idUsuario;
    }

    public LembreteEntidade getIdLembrete() {
        return idLembrete;
    }

    public void setIdLembrete(LembreteEntidade idLembrete) {
        this.idLembrete = idLembrete;
    }
}