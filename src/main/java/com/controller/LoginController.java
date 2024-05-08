package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.model.User;
import com.service.LoginService;

@Controller
public class LoginController {
	
	@Autowired
    private LoginService loginService;

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@PostMapping("/login")
	public ModelAndView processLogin(@RequestParam("password") String password,
			@RequestParam("username") String username, HttpSession session) {
		session.setAttribute("user", username);
		
		User user = loginService.checkUserCredentials(username, password);

        if (user != null) {
            session.setAttribute("user", username);
            ModelAndView modelAndView = new ModelAndView("redirect:/index");
            modelAndView.addObject("user", user);
            return modelAndView;
        } else {
            ModelAndView modelAndView = new ModelAndView("login");
            modelAndView.addObject("error", "Invalid username or password");
            return modelAndView;
        }
	}

	@PostMapping("/register")
	public ModelAndView processRegister(@RequestParam("name") String name, @RequestParam("email") String email,
			@RequestParam("password") String password, @RequestParam("username") String username,
			@RequestParam("zipcode") String zipcode) {
		User newUser = loginService.registerUser(name, email, password, username, zipcode);
	    if (newUser != null) {
	        ModelAndView modelAndView = new ModelAndView("redirect:/login");
	        modelAndView.addObject("success", "Registration successful. Please log in.");
	        return modelAndView;
	    } else {
	        ModelAndView modelAndView = new ModelAndView("signup");
	        modelAndView.addObject("error", "Registration failed. Please try again.");
	        return modelAndView;
	    }
	}
	
	@GetMapping("/logout")
    public ModelAndView logout(HttpServletRequest request) {
        request.getSession().invalidate();
        
        ModelAndView modelAndView = new ModelAndView("redirect:/login");
        return modelAndView;
    }

	@GetMapping("/index")
	public String home() {
		return "index";
	}
}
