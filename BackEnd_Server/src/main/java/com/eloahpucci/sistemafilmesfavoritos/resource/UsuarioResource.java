package com.eloahpucci.sistemafilmesfavoritos.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eloahpucci.sistemafilmesfavoritos.domain.Usuario;
import com.eloahpucci.sistemafilmesfavoritos.domain.UsuarioLogado;
import com.eloahpucci.sistemafilmesfavoritos.respository.UsuarioRepository;

@RestController
@RequestMapping(value="/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioResource {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> findAll() {
		List<Usuario> listaUsuarios = usuarioRepository.findAll();
		return ResponseEntity.ok().body(listaUsuarios);
	}
	
	@PostMapping
	public ResponseEntity<Usuario> login(@RequestBody UsuarioLogado obj) {
		
		List<Usuario> lista = usuarioRepository.findAll();
		
		for(Usuario aux: lista) {
			if(obj.getEmail().equals(aux.getEmail()) && obj.getPassword().equals(aux.getSenha())) {
				return ResponseEntity.ok().body(aux);
			}
		}
		
		return ResponseEntity.notFound().build();
	}
}
