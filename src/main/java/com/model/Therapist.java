package com.model;

import java.util.List;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

@Node("Therapist")
public class Therapist {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private List<String> specialties; // Changed from array to list
	private List<String> serviceType; // Changed from array to list
	private double fee;
	private double rating;

	@Relationship(type = "CAN_TREAT", direction = Relationship.Direction.OUTGOING)
	private List<SymptomCategory> canTreat;

	@Relationship(type = "LOCATED_IN", direction = Relationship.Direction.OUTGOING)
	private Location location;

	public Therapist() {
	}

	public Therapist(Long id, String name, List<String> specialties, List<String> serviceType, double fee,
			double rating, List<SymptomCategory> canTreat, Location location) {
		super();
		this.id = id;
		this.name = name;
		this.specialties = specialties;
		this.serviceType = serviceType;
		this.fee = fee;
		this.rating = rating;
		this.canTreat = canTreat;
		this.location = location;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getSpecialties() {
		return specialties;
	}

	public void setSpecialties(List<String> specialties) {
		this.specialties = specialties;
	}

	public List<String> getServiceType() {
		return serviceType;
	}

	public void setServiceType(List<String> serviceType) {
		this.serviceType = serviceType;
	}

	public double getFee() {
		return fee;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public List<SymptomCategory> getCanTreat() {
		return canTreat;
	}

	public void setCanTreat(List<SymptomCategory> canTreat) {
		this.canTreat = canTreat;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Therapist [id=" + id + ", name=" + name + ", specialties=" + specialties + ", serviceType="
				+ serviceType + ", fee=" + fee + ", rating=" + rating + ", canTreat=" + canTreat + ", location="
				+ location + "]";
	}



}
