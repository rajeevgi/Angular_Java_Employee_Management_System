package com.rg.employee_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rg.employee_management.entity.Employees;
import com.rg.employee_management.exception.ResourceNotFoundException;
import com.rg.employee_management.repository.employeeRepository;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    private employeeRepository repository;

    // Post Mapping to save new employees to a database.
    @PostMapping("/saveEmployees")
    public ResponseEntity<?> addEmployees(@RequestBody Employees employees, HttpSession session) {

        if(session.getAttribute("user") == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please login first!");
        }

        Employees saveEmployees = repository.save(employees);

        return ResponseEntity.ok(saveEmployees);
    }

    // Get Mapping to list all the employees of a database.
    @GetMapping("/list")
    public ResponseEntity<?> getAllEmployees(HttpSession session) {
        if(session.getAttribute("user") == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please login first!");
        }

        return ResponseEntity.ok(repository.findAll());
    }

    // Get Mapping to get employee details by Id.
    @GetMapping("/getEmployeeById/{empId}")
    public ResponseEntity<?> getEmployeeById(@PathVariable int empId, HttpSession session) {

        if(session.getAttribute("user") == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please login first!");
        }

        Employees employees = repository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id not found."));

        return ResponseEntity.ok(employees);
    }

    // Put Mapping to update employee details.
    @PutMapping("/update/{empId}")
    public ResponseEntity<?> updateEmployee(@PathVariable int empId, @RequestBody Employees employees, HttpSession session) {

        if(session.getAttribute("user") == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please login first!");
        }

        Employees existingEmp = repository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found!!"));

        existingEmp.setFirstName(employees.getFirstName());
        existingEmp.setLastName(employees.getLastName());
        existingEmp.setEmailId(employees.getEmailId());
        Employees updateEmployee = repository.save(existingEmp);

        return ResponseEntity.ok(updateEmployee);
    }

    // Delete Mapping to remove employee from a database.
    @DeleteMapping("/deleteEmp/{empId}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable int empId, HttpSession session) {

        if(session.getAttribute("user") == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please login first!");
        }

        Employees employees = repository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found!!!"));
        repository.delete(employees);
        return ResponseEntity.ok("Employee deleted Successfully...");
    }

}
