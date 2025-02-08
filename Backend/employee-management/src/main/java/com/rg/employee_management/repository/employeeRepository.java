package com.rg.employee_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rg.employee_management.entity.Employees;

@Repository
public interface employeeRepository extends JpaRepository<Employees, Integer> {

}
