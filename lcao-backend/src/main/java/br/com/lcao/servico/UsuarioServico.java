package br.com.lcao.servico;

import br.com.lcao.repositorio.UsuarioReposotorio;
import br.com.lcao.modelo.usuario.UsuarioLoginDTO;
import br.com.lcao.modelo.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioServico {

    @Autowired
    private UsuarioReposotorio usuarioReposotorio;

    public Usuario cadastrar(Usuario formulario) {
        Usuario usuario = new Usuario();
        usuario.setEmail(formulario.getEmail());
        usuario.setNome(formulario.getNome());
        usuario.setSenha(formulario.getSenha());
        return usuarioReposotorio.save(usuario);
    }

    public Usuario editar(String id, Usuario formulario) {
        Optional<Usuario> usuario = usuarioReposotorio.findById(id);
        if (usuario.isPresent()) {
            usuario.get().setNome(formulario.getNome());
            usuario.get().setSenha(formulario.getSenha());
            usuario.get().setEmail(formulario.getEmail());
            return usuarioReposotorio.saveAndFlush(usuario.get());
        }
        return null;
    }

    public Usuario logar(UsuarioLoginDTO formulario) {
        Usuario usuarioEntidade = usuarioReposotorio.findBySenhaAndEmail(formulario.getEmail(), formulario.getSenha());
        return usuarioEntidade;
    }
}
