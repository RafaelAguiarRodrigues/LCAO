package com.example.demo.repositorio;

import com.example.demo.entidade.LembreteEntidade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LembreteReposotorio extends JpaRepository<LembreteEntidade, Integer> {
    @Query("SELECT l FROM LembreteEntidade l WHERE l.titulo LIKE %:filtro% OR l.descricao LIKE %:filtro% OR l.prioridade LIKE %:filtro%")
    Page<LembreteEntidade> filtrar(Pageable pageable, @Param("filtro") String filtro);
}


