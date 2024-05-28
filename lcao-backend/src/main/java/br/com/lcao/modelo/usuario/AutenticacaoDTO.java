package br.com.lcao.modelo.usuario;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


public record UsuarioLoginDTO(String email, String senha) {
}
