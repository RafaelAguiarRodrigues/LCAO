package br.com.lcao.repositorio;

import br.com.lcao.modelo.anotacao.Anotacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AnotacaoRepositorio extends JpaRepository<Anotacao, String> {
    @Query("SELECT a FROM anotacao a WHERE a.conteudo LIKE %:filtro%") // a.titulo LIKE %:filtro% OR
    Page<Anotacao> filtrar(Pageable pageable, @Param("filtro") String filtro);
}
