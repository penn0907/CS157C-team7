package com.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.model.Therapist;
import com.service.TherapistService;

@RestController
public class TherapistController {
	
	@Autowired
    private TherapistService therapistService;

    @GetMapping("/therapists")
    public ResponseEntity<List<Therapist>> getTherapists(
            @RequestParam String specificSymptom,
            @RequestParam String serviceType,
            @RequestParam(required = false) String zipCode) {
        if ("InPerson".equals(serviceType) && zipCode == null) {
        	// Return an empty list with a bad request
            return ResponseEntity.badRequest().body(Collections.emptyList());
        }
        List<Therapist> therapists = therapistService.recommendTherapists(specificSymptom, serviceType, zipCode);
        return ResponseEntity.ok(therapists);
    }

}
