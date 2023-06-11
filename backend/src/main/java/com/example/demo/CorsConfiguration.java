package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Permite todos os caminhos
                .allowedOrigins("http://localhost:4200") // Permite qualquer origem
                .allowedMethods("*") // Permite todos os métodos HTTP (GET, POST, etc.)
                .allowedHeaders("*"); // Permite todos os cabeçalhos
    }
}

