package com.PawneeEaglesProject.pawnee_eagles.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity // want to tell spiring boot this is jpa entity
@Data // get boiler plate like getters and setters
public class Player {
    @Id //makes primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increments
    private Long id;

    private String name;
    private String email; // wn
    private String phone; //wn
    private String department; //wn
}
