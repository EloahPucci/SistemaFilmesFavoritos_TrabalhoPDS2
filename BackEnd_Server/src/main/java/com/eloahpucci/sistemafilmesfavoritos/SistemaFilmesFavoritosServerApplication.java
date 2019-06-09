package com.eloahpucci.sistemafilmesfavoritos;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.eloahpucci.sistemafilmesfavoritos.domain.Artista;
import com.eloahpucci.sistemafilmesfavoritos.domain.Filme;
import com.eloahpucci.sistemafilmesfavoritos.domain.TrilhaSonora;
import com.eloahpucci.sistemafilmesfavoritos.domain.Usuario;
import com.eloahpucci.sistemafilmesfavoritos.respository.ArtistaRepository;
import com.eloahpucci.sistemafilmesfavoritos.respository.FilmeRepository;
import com.eloahpucci.sistemafilmesfavoritos.respository.TrilhaSonoraRepository;
import com.eloahpucci.sistemafilmesfavoritos.respository.UsuarioRepository;

@SpringBootApplication
public class SistemaFilmesFavoritosServerApplication implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private FilmeRepository filmeRepository;
	
	@Autowired
	private ArtistaRepository artistaRepository;
	
	@Autowired
	private TrilhaSonoraRepository trilhaSonoraRepository;

	public static void main(String[] args) {
		SpringApplication.run(SistemaFilmesFavoritosServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Usuario user1 = new Usuario(null, "Eloah", "eloahpucci@gmail.com", "123456");
		Usuario user2 = new Usuario(null, "Jovem", "jovem@gmail.com", "232323");
		
		usuarioRepository.saveAll(Arrays.asList(user1, user2));
		
		Filme filme1 = new Filme(null, "Vingadores - Ultimato", "Ação/Aventura", 2019);
		Filme filme2 = new Filme(null, "A forma da água", "Ficção", 2017);
		Filme filme3 = new Filme(null, "Muito bem acompanhada", "Comédia/Romance", 2004);
		Filme filme4 = new Filme(null, "Viva! A vida é uma festa", "Fantasia", 2017);		
		
		filmeRepository.saveAll(Arrays.asList(filme1, filme2, filme3, filme4));
		
		Artista art1 = new Artista(null, "Johnny Depp", "Piratas do Caribe; O barbeiro demoníaco da rua Fleet; Alice no país das maravilhas");
		Artista art2 = new Artista(null, "Julia Roberts", "Uma linda mulher; Comer, rezar, amar; Um lugar chamado Notting Hill");
		Artista art3 = new Artista(null, "Anne Hathaway", "O diário da princesa; O diabo veste Prada; Um senhor estagiário");
		
		artistaRepository.saveAll(Arrays.asList(art1, art2, art3));
		
		TrilhaSonora trilha1 = new TrilhaSonora(null, "Home", "Michael Bublé", "Muito bem acompanhada");
		TrilhaSonora trilha2 = new TrilhaSonora(null, "A whole new world", " Zayn Malik and Zhavia Ward", "Aladdin");
		TrilhaSonora trilha3 = new TrilhaSonora(null, "You'll be in my heart", "Phil Collins", "Tarzan");
		TrilhaSonora trilha4 = new TrilhaSonora(null, "African queen", "2Face", "Garotas formosas");
		TrilhaSonora trilha5 = new TrilhaSonora(null, "(I've had) The time of my life ", "Jennifer Warnes and Bill Medley", "Dirty Dancing - Ritmo quente");
	
		trilhaSonoraRepository.saveAll(Arrays.asList(trilha1, trilha2, trilha3, trilha4, trilha5));
	}
}
