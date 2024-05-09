package com.example.demo.repositorio;

import com.example.demo.entidade.UsuarioLembreteEntidade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LembreteUsuarioReposotorio extends JpaRepository<UsuarioLembreteEntidade, Integer> {

}
