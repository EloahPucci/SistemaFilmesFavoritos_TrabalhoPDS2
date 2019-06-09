package com.eloahpucci.sistemafilmesfavoritos.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Artista implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer codigo;
	private String nomeArtista;
	private String filmes;
	
	public Artista() {}

	public Artista(Integer codigo, String nomeArtista, String filmes) {
		super();
		this.codigo = codigo;
		this.nomeArtista = nomeArtista;
		this.filmes = filmes;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNomeArtista() {
		return nomeArtista;
	}

	public void setNomeArtista(String nomeArtista) {
		this.nomeArtista = nomeArtista;
	}

	public String getFilmes() {
		return filmes;
	}

	public void setFilmes(String filmes) {
		this.filmes = filmes;
	}
}
