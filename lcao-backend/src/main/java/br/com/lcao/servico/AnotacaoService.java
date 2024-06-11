package br.com.lcao.servico;

import br.com.lcao.modelo.anotacao.Anotacao;
import br.com.lcao.repositorio.AnotacaoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnotacaoService {

    @Autowired
    private AnotacaoRepositorio anotacaoRepositorio;

    public List<Anotacao> listar(String filtro, Integer pagina, Integer limite) {
        Pageable pageable = PageRequest.of(pagina, limite);
        if (filtro != null && !filtro.isEmpty()) {
            return anotacaoRepositorio.filtrar(pageable, filtro).getContent();
        }
        return anotacaoRepositorio.findAll(pageable).getContent();
    }

    public Anotacao salvar(Anotacao anotacao) {
        return anotacaoRepositorio.save(anotacao);
    }

    public void deletar(String id) {
        anotacaoRepositorio.deleteById(id);
    }

    public Anotacao buscarPorId(String id) {
        return anotacaoRepositorio.findById(id).orElse(null);
    }

    public Anotacao atualizar(String id, Anotacao anotacaoAtualizada) {
        return anotacaoRepositorio.findById(id).map(anotacao -> {
            anotacao.setConteudo(anotacaoAtualizada.getConteudo());
            anotacao.setUsuario(anotacaoAtualizada.getUsuario());
            return anotacaoRepositorio.save(anotacao);
        }).orElse(null);
    }
}
