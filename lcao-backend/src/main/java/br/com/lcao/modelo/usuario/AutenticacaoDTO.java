package br.com.lcao.modelo.usuario;

import lombok.Data;

@Data
public class AutenticacaoDTO {
    private String email;
    private String senha;
}
