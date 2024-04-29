package com.model;

import java.util.List;

public class TherapistDetails {

	private Therapist therapist;
	private List<SymptomCategory> canTreat;
	private Location location;
	
	public TherapistDetails() {
	}
	
	public TherapistDetails(Therapist therapist, List<SymptomCategory> canTreat, Location location) {
		super();
		this.therapist = therapist;
		this.canTreat = canTreat;
		this.location = location;
	}
	
	
	public List<String> getServiceType() {
        return therapist.getServiceType();
    }

	public Therapist getTherapist() {
		return therapist;
	}

	public void setTherapist(Therapist therapist) {
		this.therapist = therapist;
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
		return "TherapistDetails [therapist=" + therapist + ", canTreat=" + canTreat + ", location=" + location + "]";
	}
	
	
	
}
