package com.eloahpucci.sistemafilmesfavoritos.resource;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eloahpucci.sistemafilmesfavoritos.domain.Artista;
import com.eloahpucci.sistemafilmesfavoritos.respository.ArtistaRepository;

@RestController
@RequestMapping(value="/artistas")
@CrossOrigin(origins = "http://localhost")
public class ArtistaResource {
	
	@Autowired
	private ArtistaRepository service;
	
	@GetMapping
	public ResponseEntity<List<Artista>> findAll() {
		List<Artista> listaArtistas = service.findAll();
		return ResponseEntity.ok().body(listaArtistas);
	}
		
	@PostMapping
	public ResponseEntity<?> salvarArtista(@Valid @RequestBody Artista artista) {
		service.save(artista);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		        .buildAndExpand(artista.getCodigo()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping
	public ResponseEntity<?> atualizarArtista(@Valid @RequestBody Artista artista) {
		service.save(artista);
	    return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping(value="{codigo}")
	public ResponseEntity<?> excluirArtista(@PathVariable Integer codigo) {
		try {
			service.deleteById(codigo);
			return ResponseEntity.ok(codigo);	
		} catch(EmptyResultDataAccessException e) {
			return ResponseEntity.notFound().build();
		}
	}

}
