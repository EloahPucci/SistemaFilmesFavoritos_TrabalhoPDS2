package com.eloahpucci.sistemafilmesfavoritos.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TrilhaSonora implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer codigo;
	private String nomeMusica;
	private String artistaInterprete;
	private String filme;
	
	public TrilhaSonora() {}

	public TrilhaSonora(Integer codigo, String nomeMusica, String artistaInterprete, String filme) {
		super();
		this.codigo = codigo;
		this.nomeMusica = nomeMusica;
		this.artistaInterprete = artistaInterprete;
		this.filme = filme;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNomeMusica() {
		return nomeMusica;
	}

	public void setNomeMusica(String nomeMusica) {
		this.nomeMusica = nomeMusica;
	}

	public String getArtistaInterprete() {
		return artistaInterprete;
	}

	public void setArtistaInterprete(String artistaInterprete) {
		this.artistaInterprete = artistaInterprete;
	}

	public String getFilme() {
		return filme;
	}

	public void setFilmes(String filme) {
		this.filme = filme;
	}	
}
