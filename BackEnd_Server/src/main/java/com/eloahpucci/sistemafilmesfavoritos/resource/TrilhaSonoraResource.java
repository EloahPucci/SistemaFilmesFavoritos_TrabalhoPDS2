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

import com.eloahpucci.sistemafilmesfavoritos.domain.TrilhaSonora;
import com.eloahpucci.sistemafilmesfavoritos.respository.TrilhaSonoraRepository;

@RestController
@RequestMapping(value="/trilhas")
@CrossOrigin(origins = "http://localhost:4200")
public class TrilhaSonoraResource {
	
	@Autowired
	private TrilhaSonoraRepository service;
	
	@GetMapping
	public ResponseEntity<List<TrilhaSonora>> findAll() {
		List<TrilhaSonora> listaTrilhas = service.findAll();
		return ResponseEntity.ok().body(listaTrilhas);
	}
		
	@PostMapping
	public ResponseEntity<?> salvarTrilhaSonora(@Valid @RequestBody TrilhaSonora trilhaSonora) {
		service.save(trilhaSonora);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		        .buildAndExpand(trilhaSonora.getCodigo()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping
	public ResponseEntity<?> atualizarTrilhaSonora(@Valid @RequestBody TrilhaSonora trilhaSonora) {
		service.save(trilhaSonora);
	    return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping(value="{codigo}")
	public ResponseEntity<?> excluirTrilhaSonora(@PathVariable Integer codigo) {
		try {
			service.deleteById(codigo);
			return ResponseEntity.ok(codigo);	
		} catch(EmptyResultDataAccessException e) {
			return ResponseEntity.notFound().build();
		}
	}

}
