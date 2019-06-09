package com.eloahpucci.sistemafilmesfavoritos;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.eloahpucci.sistemafilmesfavoritos.domain.Usuario;
import com.eloahpucci.sistemafilmesfavoritos.respository.UsuarioRepository;

@SpringBootApplication
public class SistemaFilmesFavoritosServerApplication implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	public static void main(String[] args) {
		SpringApplication.run(SistemaFilmesFavoritosServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Usuario user1 = new Usuario(null, "Eloah", "eloahpucci@gmail.com", "123456");
		Usuario user2 = new Usuario(null, "Jovem", "jovem@gmail.com", "123456");
		Usuario user3 = new Usuario(null, "Coleguinha", "coleguinha@gmail.com", "123456");
		
		usuarioRepository.saveAll(Arrays.asList(user1, user2, user3));
	}
}
