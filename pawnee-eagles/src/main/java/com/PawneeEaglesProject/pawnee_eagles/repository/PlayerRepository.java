package com.PawneeEaglesProject.pawnee_eagles.repository;

import com.PawneeEaglesProject.pawnee_eagles.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
}
