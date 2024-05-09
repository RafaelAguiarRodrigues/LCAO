package br.com.lcao.repositorio;

import br.com.lcao.entidade.UsuarioEntidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioReposotorio extends JpaRepository<UsuarioEntidade, Integer> {

    @Query("select u from UsuarioEntidade u where u.email = :email and u.senha = :senha")
    UsuarioEntidade findBySenhaAndEmail(@Param("email") String email, @Param("senha") String senha);

}
