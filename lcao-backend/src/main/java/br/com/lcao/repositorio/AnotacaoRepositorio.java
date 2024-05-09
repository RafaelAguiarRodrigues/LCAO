package br.com.lcao.repositorio;

import br.com.lcao.modelo.anotacao.Anotacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnotacaoRepositorio extends JpaRepository<Anotacao, String> {
}
