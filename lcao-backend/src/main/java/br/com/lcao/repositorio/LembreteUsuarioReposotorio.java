package br.com.lcao.repositorio;

import br.com.lcao.entidade.UsuarioLembreteEntidade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LembreteUsuarioReposotorio extends JpaRepository<UsuarioLembreteEntidade, Integer> {

}
