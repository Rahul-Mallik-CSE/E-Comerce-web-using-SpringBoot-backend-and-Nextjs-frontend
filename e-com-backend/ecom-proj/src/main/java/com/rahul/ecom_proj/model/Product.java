package com.rahul.ecom_proj.model;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // JPA annotation to mark this class as a database entity
@Data   // Lombok annotations to generate boilerplate code like getters, setters, constructors, etc.
@AllArgsConstructor // Generates a constructor with all fields as parameters
@NoArgsConstructor // Generates a no-argument constructor
public class Product {

    @Id // JPA annotation to mark this field as the primary key 
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY) // Auto-generates the ID value
    private int id;
    private String name;
    private String desc;
    private String brand;
    private BigDecimal price;
    private String category;
    private Date releaseDate;
    private boolean available;
    private int quantity;
}
