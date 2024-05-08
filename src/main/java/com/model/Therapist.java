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
	private List<String> specialties;
	private List<String> serviceType;
	private double fee;
	private double rating;
	private String imageUrl;
	private String phoneNumber;
	private String website;
	private String address;

	@Relationship(type = "CAN_TREAT", direction = Relationship.Direction.OUTGOING)
	private List<SymptomCategory> canTreat;

	@Relationship(type = "LOCATED_IN", direction = Relationship.Direction.OUTGOING)
	private Location location;

	public Therapist() {
	}

	public Therapist(Long id, String name, List<String> specialties, List<String> serviceType, double fee,
			double rating, String imageUrl, String phoneNumber, String website, String address,
			List<SymptomCategory> canTreat, Location location) {
		super();
		this.id = id;
		this.name = name;
		this.specialties = specialties;
		this.serviceType = serviceType;
		this.fee = fee;
		this.rating = rating;
		this.imageUrl = imageUrl;
		this.phoneNumber = phoneNumber;
		this.website = website;
		this.address = address;
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
	

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Therapist [id=" + id + ", name=" + name + ", specialties=" + specialties + ", serviceType="
				+ serviceType + ", fee=" + fee + ", rating=" + rating + ", imageUrl=" + imageUrl + ", phoneNumber="
				+ phoneNumber + ", website=" + website + ", address=" + address + ", canTreat=" + canTreat
				+ ", location=" + location + "]";
	}


}
