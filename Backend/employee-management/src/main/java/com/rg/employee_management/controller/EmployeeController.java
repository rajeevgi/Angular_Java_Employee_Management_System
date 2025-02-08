package com.rg.employee_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class EmployeeController {

    @Autowired
    private employeeRepository repository;

    // Post Mapping to save new employees to a database.
    @PostMapping("/saveEmployees")
    public Employees addEmployees(@RequestBody Employees employees) {
        return repository.save(employees);
    }

    // Get Mapping to list all the employees of a database.
    @GetMapping("/list")
    public List<Employees> getAllEmployees() {
        return repository.findAll();
    }

    // Get Mapping to get employee details by Id.
    @GetMapping("/getEmployeeById/{empId}")
    public ResponseEntity<Employees> getEmployeeById(@PathVariable int empId) {
        Employees employees = repository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id not found."));

        return ResponseEntity.ok(employees);
    }

    // Put Mapping to update employee details.
    @PutMapping("/update/{empId}")
    public ResponseEntity<Employees> updateEmployee(@PathVariable int empId, @RequestBody Employees employees) {
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
    public ResponseEntity<Employees> deleteEmployeeById(@PathVariable int empId) {
        Employees employees = repository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found!!!"));
        repository.delete(employees);
        return ResponseEntity.ok(employees);
    }

}
