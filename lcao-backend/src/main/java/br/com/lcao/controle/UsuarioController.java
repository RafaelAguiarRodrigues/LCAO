package br.com.lcao.controle;

import br.com.lcao.modelo.usuario.UsuarioLoginDTO;
import br.com.lcao.modelo.usuario.Usuario;
import br.com.lcao.servico.UsuarioServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioServico usuarioServico;

    @PostMapping
    public ResponseEntity<Usuario> salvar(@RequestBody Usuario formulario) {
        return ResponseEntity.ok(usuarioServico.cadastrar(formulario));
    }

    @PutMapping("{id}")
    public ResponseEntity<Usuario> editar(@PathVariable("id") String id, @RequestBody Usuario formulario) {
        return ResponseEntity.ok(usuarioServico.editar(id, formulario));
    }

    @PostMapping("/logar")
    public Boolean logar(@RequestBody UsuarioLoginDTO formulario) {
        return usuarioServico.logar(formulario);
    }
}
