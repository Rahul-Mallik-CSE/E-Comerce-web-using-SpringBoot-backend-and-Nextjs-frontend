package com.rahul.ecom_proj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rahul.ecom_proj.model.Product;
import com.rahul.ecom_proj.repo.ProductRepo;

@Service // Spring annotation to indicate that this class is a service component
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts() {
       return repo.findAll();
    }
}
