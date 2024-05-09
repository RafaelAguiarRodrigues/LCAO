package br.com.lcao.controle;

import br.com.lcao.infra.security.TokenService;
import br.com.lcao.modelo.usuario.LoginRespostaDTO;
import br.com.lcao.modelo.usuario.UsuarioLoginDTO;
import br.com.lcao.modelo.usuario.Usuario;
import br.com.lcao.servico.UsuarioServico;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioServico usuarioServico;
    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity<Usuario> salvar(@RequestBody Usuario formulario) {
        usuarioServico.cadastrar(formulario);
        return ResponseEntity.ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Usuario> editar(@PathVariable("id") String id, @RequestBody Usuario formulario) {
        usuarioServico.editar(id, formulario);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/logar")
    public ResponseEntity<?> logar(@RequestBody @Valid UsuarioLoginDTO data) {
        var usuario = usuarioServico.logar(data);
        var token = tokenService.generateToken(usuario);

        return ResponseEntity.ok(new LoginRespostaDTO(token, usuario));
    }
}
