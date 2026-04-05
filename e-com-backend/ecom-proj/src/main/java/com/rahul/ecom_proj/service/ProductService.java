package com.rahul.ecom_proj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.rahul.ecom_proj.model.Product;
import com.rahul.ecom_proj.repo.ProductRepo;

public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts() {
       return repo.findAll();
    }
}
