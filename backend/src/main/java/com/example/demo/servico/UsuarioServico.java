package com.example.demo.servico;

import com.example.demo.entidade.UsuarioEntidade;
import com.example.demo.modelo.UsuarioLoginModel;
import com.example.demo.modelo.UsuarioModel;
import com.example.demo.repositorio.UsuarioReposotorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioServico {

    @Autowired
    private UsuarioReposotorio usuarioReposotorio;

    public UsuarioEntidade cadastrar(UsuarioModel formulario) {
        UsuarioEntidade usuario = new UsuarioEntidade();
        usuario.setEmail(formulario.getEmail());
        usuario.setNome(formulario.getNome());
        usuario.setSenha(formulario.getSenha());
        return usuarioReposotorio.save(usuario);
    }

    public UsuarioEntidade editar(Integer id, UsuarioModel formulario) {
        Optional<UsuarioEntidade> usuario = usuarioReposotorio.findById(id);
        if (usuario.isPresent()) {
            usuario.get().setNome(formulario.getNome());
            usuario.get().setSenha(formulario.getSenha());
            usuario.get().setEmail(formulario.getEmail());
            return usuarioReposotorio.saveAndFlush(usuario.get());
        }
        return null;
    }

    public Boolean logar(UsuarioLoginModel formulario) {
        UsuarioEntidade usuarioEntidade = usuarioReposotorio.findBySenhaAndEmail(formulario.getEmail(), formulario.getSenha());
        return usuarioEntidade != null;
    }
}
