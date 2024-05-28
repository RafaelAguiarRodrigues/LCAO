package br.com.lcao.servico.security;

import br.com.lcao.infra.security.TokenService;
import br.com.lcao.modelo.usuario.Usuario;
import br.com.lcao.servico.UsuarioServico;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    @Autowired
    UsuarioServico usuarioServico;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = this.recoverToken(request);

        if(token != null){
            String usuarioId = tokenService.validateToken(token);
            Usuario usuario = usuarioServico.loadUserByUsername(usuarioId);
        }
    }

    private String recoverToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == "null") {
            return null;
        }
        return authHeader.replace("Bearer ", "");
    }
}
