package com.example.demo.controle;

import com.example.demo.entidade.LembreteEntidade;
import com.example.demo.modelo.LembreteModel;
import com.example.demo.servico.LembreteServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/lembrete")
@CrossOrigin("http://localhost:4200")
public class LembreteController {
    @Autowired
    public LembreteServico lembreteServico;

    @PostMapping
    public ResponseEntity<LembreteEntidade> salvar(@RequestBody LembreteModel formulario) {
        return ResponseEntity.ok(lembreteServico.salvar(formulario));
    }

    @GetMapping
    public ResponseEntity<Page<LembreteEntidade>> listar(
            @RequestParam("pagina") Integer pagina,
            @RequestParam("limit") Integer limit,
            @RequestParam(value = "filtro", required = false) String filtro
    ) {
        if (filtro != null && !filtro.isEmpty()) {
            return ResponseEntity.ok(lembreteServico.filtrar(filtro, pagina, limit));
        } else {
            return ResponseEntity.ok(lembreteServico.listar(pagina, limit));
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<LembreteEntidade>> buscarPorId(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(lembreteServico.buscarPorId(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<LembreteEntidade> editar(@PathVariable("id") Integer id, @RequestBody LembreteModel formulario) {
        return ResponseEntity.ok(lembreteServico.editar(id, formulario));
    }

    @DeleteMapping("{id}")
    public void deletar(@PathVariable("id") Integer id) {
        lembreteServico.deletar(id);
    }

}
