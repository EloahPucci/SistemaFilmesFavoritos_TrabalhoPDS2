package com.eloahpucci.sistemafilmesfavoritos.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eloahpucci.sistemafilmesfavoritos.domain.Artista;

@Repository
public interface ArtistaRepository extends JpaRepository<Artista, Integer> {

}
