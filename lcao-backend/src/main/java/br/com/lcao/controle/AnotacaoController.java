package br.com.lcao.controle;

import br.com.lcao.modelo.anotacao.Anotacao;
import br.com.lcao.servico.AnotacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/anotacao")
public class AnotacaoController {
    @Autowired
    private AnotacaoService anotacaoService;

    @GetMapping
    public ResponseEntity<List<Anotacao>> listar(
            @RequestParam(defaultValue = "") Integer pagina,
            @RequestParam(defaultValue = "8") Integer limit,
            @RequestParam(defaultValue = "", required = false) String filtro) {
        var anotacoes = anotacaoService.listar(filtro, pagina, limit);
        return ResponseEntity.ok(anotacoes);
    }

    @PostMapping
    public ResponseEntity<Anotacao> criar(@RequestBody Anotacao anotacao) {
        Anotacao anotacaoSalva = anotacaoService.salvar(anotacao);
        return ResponseEntity.ok(anotacaoSalva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable String id) {
        anotacaoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Anotacao> buscarPorId(@PathVariable String id) {
        Anotacao anotacao = anotacaoService.buscarPorId(id);
        return ResponseEntity.ok(anotacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Anotacao> atualizar(@PathVariable String id, @RequestBody Anotacao anotacaoAtualizada) {
        Anotacao anotacaoAtualizadaResultado = anotacaoService.atualizar(id, anotacaoAtualizada);
        if (anotacaoAtualizadaResultado != null) {
            return ResponseEntity.ok(anotacaoAtualizadaResultado);
        }
        return ResponseEntity.notFound().build();
    }
}
