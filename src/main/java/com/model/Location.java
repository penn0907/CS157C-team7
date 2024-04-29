package com.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;

public class Location {
	
	@Id @GeneratedValue private Long id;
    private String zipCode;
    
    
	public Location(Long id, String zipCode) {
		super();
		this.id = id;
		this.zipCode = zipCode;
	}
	
	public Location() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	@Override
	public String toString() {
		return "Location [id=" + id + ", zipCode=" + zipCode + "]";
	}
    
    

}
