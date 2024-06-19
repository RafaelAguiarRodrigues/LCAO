package br.com.lcao.servico;

import br.com.lcao.repositorio.UsuarioReposotorio;
import br.com.lcao.modelo.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioServico {

    @Autowired
    private UsuarioReposotorio usuarioReposotorio;

    public void cadastrar(Usuario formulario) {
        Usuario usuario = new Usuario();
        usuario.setEmail(formulario.getEmail());
        usuario.setNome(formulario.getNome());
        usuario.setSenha(formulario.getSenha());
        usuarioReposotorio.save(usuario);
    }

    public void editar(String id, Usuario formulario) {
        Optional<Usuario> usuario = usuarioReposotorio.findById(id);
        if (usuario.isPresent()) {
            usuario.get().setNome(formulario.getNome());
            usuario.get().setSenha(formulario.getSenha());
            usuario.get().setEmail(formulario.getEmail());
            usuarioReposotorio.saveAndFlush(usuario.get());
        }
    }

    public Optional<Usuario> findMe() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Usuario usuario = (Usuario) authentication.getPrincipal();
        String id = usuario.getId();
        return usuarioReposotorio.findById(id);
    }

//    private String encryptPassword(String rawPassword) {
//        return BCrypt.withDefaults().hashToString(12, rawPassword.toCharArray());
//    }
}
