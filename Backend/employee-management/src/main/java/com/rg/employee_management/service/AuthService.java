package com.rg.employee_management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rg.employee_management.entity.User;
import com.rg.employee_management.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String register(User user){
        userRepository.save(user);
        return "User registered successfully...";
    }

    public boolean login(String email, String password, HttpSession session){
        User user = userRepository.findByEmailAndPassword(email, password);

        if(user != null){
            session.setAttribute("user", user);
            return true;
        }

        return false;
    }

    public void logout(HttpSession session){
        session.invalidate();
    }
}
