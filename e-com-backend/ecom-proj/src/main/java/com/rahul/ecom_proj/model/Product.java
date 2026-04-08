package com.rahul.ecom_proj.model;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // JPA annotation to mark this class as a database entity
@Data   // Lombok annotations to generate boilerplate code like getters, setters, constructors, etc.
@NoArgsConstructor // Generates a no-argument constructor
public class Product {

    @Id // JPA annotation to mark this field as the primary key 
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY) // Auto-generates the ID value
    private Integer id;
    private String name;
    private String desc;
    private String brand;
    private BigDecimal price;
    private String category;

    @JsonFormat( shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd" ) // Format the date when serializing to JSON
    private Date releaseDate;
    private boolean available;
    private int quantity;

    
    private String imageName; // Store the filename of the product image
    private String imageType; // Store the MIME type of the image (e.g., "image/jpeg")
    
    @Lob // JPA annotation to indicate that this field should be treated as a large object (BLOB)
    private byte[] imageData; // Store the binary data of the image
}
