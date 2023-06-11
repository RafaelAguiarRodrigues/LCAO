package com.example.demo.servico;

import com.example.demo.entidade.LembreteEntidade;
import com.example.demo.modelo.LembreteModel;
import com.example.demo.repositorio.LembreteReposotorio;
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

    public LembreteEntidade salvar(LembreteModel formulario) {
        LembreteEntidade lembreteEntidade = new LembreteEntidade();
        lembreteEntidade.setData(formulario.getData());
        lembreteEntidade.setDescricao(formulario.getDescricao());
        lembreteEntidade.setModelo(formulario.getModelo());
        lembreteEntidade.setTitulo(formulario.getTitulo());
        lembreteEntidade.setPrioridade(formulario.getPrioridade());
        return lembreteReposotorio.save(lembreteEntidade);
    }

    public Page<LembreteEntidade> listar(Integer pagina, Integer limit) {
        Pageable paging = PageRequest.of(pagina, limit);
        return lembreteReposotorio.findAll(paging);
    }

    public LembreteEntidade  editar(Integer id, LembreteModel formulario) {
        LembreteEntidade lembreteEntidade = lembreteReposotorio.findById(id).get();
        lembreteEntidade.setData(formulario.getData());
        lembreteEntidade.setDescricao(formulario.getDescricao());
        lembreteEntidade.setModelo(formulario.getModelo());
        lembreteEntidade.setTitulo(formulario.getTitulo());
        lembreteEntidade.setPrioridade(formulario.getPrioridade());
        return lembreteReposotorio.saveAndFlush(lembreteEntidade);
    }

    public void deletar(Integer id) {
        lembreteReposotorio.deleteById(id);
    }

    public Page<LembreteEntidade> filtrar(String filtro, Integer pagina, Integer limit) {
        Pageable paging = PageRequest.of(pagina, limit);
        return lembreteReposotorio.filtrar(paging, filtro);
    }

    public Optional<LembreteEntidade> buscarPorId(Integer id) {
        return lembreteReposotorio.findById(id);
    }
}
