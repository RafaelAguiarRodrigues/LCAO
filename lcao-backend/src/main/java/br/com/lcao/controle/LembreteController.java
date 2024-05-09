package br.com.lcao.controle;

import br.com.lcao.modelo.lembrete.Lembrete;
import br.com.lcao.servico.LembreteServico;
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
    public ResponseEntity<Lembrete> salvar(@RequestBody Lembrete formulario) {
        return ResponseEntity.ok(lembreteServico.salvar(formulario));
    }

    @GetMapping
    public ResponseEntity<Page<Lembrete>> listar(
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
    public ResponseEntity<Optional<Lembrete>> buscarPorId(@PathVariable("id") String id) {
        return ResponseEntity.ok(lembreteServico.buscarPorId(id));
    }

    @PutMapping("{id}")
    public ResponseEntity<Lembrete> editar(@PathVariable("id") String id, @RequestBody Lembrete formulario) {
        return ResponseEntity.ok(lembreteServico.editar(id, formulario));
    }

    @DeleteMapping("{id}")
    public void deletar(@PathVariable("id") String id) {
        lembreteServico.deletar(id);
    }
}
