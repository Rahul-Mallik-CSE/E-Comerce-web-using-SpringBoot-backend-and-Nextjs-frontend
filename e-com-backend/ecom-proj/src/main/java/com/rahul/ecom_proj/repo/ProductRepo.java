package com.rahul.ecom_proj.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rahul.ecom_proj.model.Product;

@Repository // Spring annotation to indicate that this interface is a repository component
public interface ProductRepo extends JpaRepository<Product, Integer> {

}
