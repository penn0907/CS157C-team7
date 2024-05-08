package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.model.Therapist;
import com.service.TherapistService;

@RestController
public class TherapistController {
	
	@Autowired
    private TherapistService therapistService;

    @PostMapping("/therapists")
    public ModelAndView getTherapists(
            @RequestParam String specificSymptom,
            @RequestParam String serviceType,
            @RequestParam(required = false) String zipCode) {
    	
    	ModelAndView modelAndView = new ModelAndView("index");
    	
    	List<Therapist> therapists = null;
        if ("InPerson".equals(serviceType)) {
        	if(zipCode == null) {
        		// Return an empty list with a bad request
        		modelAndView.addObject("msg", "Sorry, no therapist found.");
        		return modelAndView;
        	}
        	therapists = therapistService.recommendInPersonTherapists(specificSymptom, zipCode);
        	
        } else {
        	
        	therapists = therapistService.recommendOnlineTherapists(specificSymptom);
        }
        if(therapists.size() <= 0) {
        	return modelAndView.addObject("msg", "Sorry, no therapist found.");
        }
        modelAndView.addObject("therapists", therapists);
        return modelAndView;
    }

}
