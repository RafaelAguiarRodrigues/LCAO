package br.com.lcao.modelo.usuario;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioLoginDTO {
    private String email;
    private String senha;
}
