package br.com.lcao.repositorio;

import br.com.lcao.modelo.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioReposotorio extends JpaRepository<Usuario, String> {

    @Query("select u from usuario u where u.email = :email and u.senha = :senha")
    Usuario findBySenhaAndEmail(@Param("email") String email, @Param("senha") String senha);
    UserDetails findByEmail(String email);

}
