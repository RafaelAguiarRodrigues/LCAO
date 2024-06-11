package br.com.lcao.controle;

import br.com.lcao.modelo.lembrete.Lembrete;
import br.com.lcao.servico.LembreteServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/lembrete")
public class LembreteController {
    @Autowired
    public LembreteServico lembreteServico;

    @PostMapping
    public ResponseEntity<Lembrete> salvar(@RequestBody Lembrete formulario) {
        lembreteServico.salvar(formulario);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Lembrete>> listar(
            @RequestParam(defaultValue = "") Integer pagina,
            @RequestParam(defaultValue = "8") Integer limit,
            @RequestParam(defaultValue = "", required = false) String filtro) {
        var lembretes = lembreteServico.listar(filtro, pagina, limit);
        return ResponseEntity.ok(lembretes);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Lembrete>> buscarPorId(@PathVariable("id") String id) {
        var usuario = lembreteServico.buscarPorId(id);
        return ResponseEntity.ok(usuario);
    }

    @PutMapping("{id}")
    public ResponseEntity<Lembrete> editar(@PathVariable("id") String id, @RequestBody Lembrete lembrete) {
        lembreteServico.editar(id, lembrete);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Lembrete> deletar(@PathVariable("id") String id) {
        lembreteServico.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
