package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.TherapistRepository;
import com.model.Therapist;

@Service
public class TherapistService {

	@Autowired
	private TherapistRepository therapistRepository;

	public List<Therapist> recommendOnlineTherapists(String specificSymptom) {
		// Fetch all therapists that can treat the given symptom category
		List<Therapist> therapists = therapistRepository.findOnlineTherapists(specificSymptom);

		return therapists;
		// TODO Filter therapists based on service type and optionally by zip code for
		// in-person services

		/*
		 * return therapists.stream() .filter(t ->
		 * t.getServiceType().contains(serviceType)) // Check if the list contains the
		 * serviceType .filter(t -> serviceType.equals("Online") || (t.getLocation() !=
		 * null && t.getLocation().getZipCode().equals(zipCode)))
		 * .collect(Collectors.toList());
		 */
	}

	public List<Therapist> recommendInPersonTherapists(String specificSymptom, String zipCode) {
		List<Therapist> therapists = therapistRepository.findInPersonTherapists(specificSymptom, zipCode);

		return therapists;
	}

}
