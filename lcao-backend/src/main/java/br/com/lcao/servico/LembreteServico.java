package br.com.lcao.servico;

import br.com.lcao.modelo.lembrete.Lembrete;
import br.com.lcao.repositorio.LembreteReposotorio;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
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
        lembreteEntidade.setUsuario(formulario.getUsuario());
        return lembreteReposotorio.save(lembreteEntidade);
    }

    public List<Lembrete> listar(String filtro, Integer pagina, Integer limit) {
        Pageable pageable = PageRequest.of(pagina, limit);
        if(filtro != null){
            return lembreteReposotorio.filtrar(pageable, filtro).getContent();
        }
        return lembreteReposotorio.findAll(pageable).getContent();
    }

    public Lembrete editar(String id, Lembrete formulario) {
        Optional<Lembrete> optionalLembrete = lembreteReposotorio.findById(id);
        if(optionalLembrete.isEmpty()){
            throw new EntityNotFoundException("Lembrete não encontrado com o ID: " + id);
        }

        Lembrete lembrete = optionalLembrete.get();
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

    public Optional<Lembrete> buscarPorId(String id) {
        var lembrete = lembreteReposotorio.findById(id);
        return lembrete;
    }
}
