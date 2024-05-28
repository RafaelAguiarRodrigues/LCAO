package br.com.lcao.controle;

import br.com.lcao.infra.security.TokenService;
import br.com.lcao.modelo.usuario.AutenticacaoDTO;
import br.com.lcao.modelo.usuario.LoginRespostaDTO;
import br.com.lcao.modelo.usuario.Usuario;
import br.com.lcao.repositorio.UsuarioReposotorio;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UsuarioReposotorio usuarioReposotorio;

    @PostMapping("/login")
    public ResponseEntity<LoginRespostaDTO> verifyLogin(@RequestBody @Valid AutenticacaoDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getSenha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var accessToken = tokenService.generateToken((Usuario) auth.getPrincipal());
        return ResponseEntity.ok(new LoginRespostaDTO(accessToken));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid Usuario usuario) {
        if(this.usuarioReposotorio.findByEmail(usuario.getEmail()) != null){
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(usuario.getSenha());
        Usuario novoUsuario = new Usuario(usuario.getNome(), usuario.getEmail(), encryptedPassword);

        this.usuarioReposotorio.save(novoUsuario);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Usuario> editar(@PathVariable("id") String id, @RequestBody Usuario usuario) {
        if(this.usuarioReposotorio.findByEmail(usuario.getEmail()) != null){
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(usuario.getSenha());
        Usuario usuarioAtualizado = new Usuario(usuario.getNome(), usuario.getEmail(), encryptedPassword);

        this.usuarioReposotorio.save(usuarioAtualizado);

        return ResponseEntity.ok().build();
    }
}
