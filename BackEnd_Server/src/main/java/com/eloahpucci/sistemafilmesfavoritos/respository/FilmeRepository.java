package com.eloahpucci.sistemafilmesfavoritos.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eloahpucci.sistemafilmesfavoritos.domain.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Integer> {

}
