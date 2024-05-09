package br.com.lcao.servico;

import br.com.lcao.modelo.lembrete.Lembrete;
import br.com.lcao.repositorio.LembreteReposotorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LembreteServico {
    @Autowired
    private LembreteReposotorio lembreteReposotorio;

    public Lembrete salvar(Lembrete formulario) {
        Lembrete lembreteEntidade = new Lembrete();
        lembreteEntidade.setData(formulario.getData());
        lembreteEntidade.setDescricao(formulario.getDescricao());
        lembreteEntidade.setModelo(formulario.getModelo());
        lembreteEntidade.setTitulo(formulario.getTitulo());
        lembreteEntidade.setPrioridade(formulario.getPrioridade());
        return lembreteReposotorio.save(lembreteEntidade);
    }

    public Page<Lembrete> listar(Integer pagina, Integer limit) {
        Pageable paging = PageRequest.of(pagina, limit);
        return lembreteReposotorio.findAll(paging);
    }

    public Lembrete  editar(String id, Lembrete formulario) {
        Lembrete lembrete = lembreteReposotorio.findById(id).get();
        lembrete.setData(formulario.getData());
        lembrete.setDescricao(formulario.getDescricao());
        lembrete.setModelo(formulario.getModelo());
        lembrete.setTitulo(formulario.getTitulo());
        lembrete.setPrioridade(formulario.getPrioridade());
        return lembreteReposotorio.saveAndFlush(lembrete);
    }

    public void deletar(String id) {
        lembreteReposotorio.deleteById(id);
    }

    public Page<Lembrete> filtrar(String filtro, Integer pagina, Integer limit) {
        Pageable paging = PageRequest.of(pagina, limit);
        return lembreteReposotorio.filtrar(paging, filtro);
    }

    public Optional<Lembrete> buscarPorId(String id) {
        return lembreteReposotorio.findById(id);
    }
}
