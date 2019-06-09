package com.eloahpucci.sistemafilmesfavoritos.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eloahpucci.sistemafilmesfavoritos.domain.TrilhaSonora;

@Repository
public interface TrilhaSonoraRepository extends JpaRepository<TrilhaSonora, Integer> {

}
