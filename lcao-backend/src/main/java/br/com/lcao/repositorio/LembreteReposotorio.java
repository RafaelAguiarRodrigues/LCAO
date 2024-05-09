package br.com.lcao.repositorio;

import br.com.lcao.modelo.lembrete.Lembrete;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LembreteReposotorio extends JpaRepository<Lembrete, String> {
    @Query("SELECT l FROM lembrete l WHERE l.titulo LIKE %:filtro% OR l.descricao LIKE %:filtro% OR l.prioridade LIKE %:filtro%")
    Page<Lembrete> filtrar(Pageable pageable, @Param("filtro") String filtro);
}


