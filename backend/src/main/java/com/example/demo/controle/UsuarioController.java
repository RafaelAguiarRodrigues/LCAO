package com.example.demo.controle;

import com.example.demo.entidade.UsuarioEntidade;
import com.example.demo.modelo.UsuarioLoginModel;
import com.example.demo.modelo.UsuarioModel;
import com.example.demo.servico.UsuarioServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioServico usuarioServico;

    @PostMapping
    public ResponseEntity<UsuarioEntidade> salvar(@RequestBody UsuarioModel formulario) {
        return ResponseEntity.ok(usuarioServico.cadastrar(formulario));
    }

    @PutMapping("{id}")
    public ResponseEntity<UsuarioEntidade> editar(@PathVariable("id") Integer id, @RequestBody UsuarioModel formulario) {
        return ResponseEntity.ok(usuarioServico.editar(id, formulario));
    }

    @PostMapping("/logar")
    public Boolean logar(@RequestBody UsuarioLoginModel formulario) {
        return usuarioServico.logar(formulario);
    }
}
