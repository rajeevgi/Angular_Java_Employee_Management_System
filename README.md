# Employee Management System

## Overview
The Employee Management System is a web application that allows users to manage employee details efficiently. It provides CRUD (Create, Read, Update, Delete) operations for employees. The frontend is built using Angular, while the backend is developed using Java and the Spring Boot framework with MySQL as the database.

## Features
- Employee registration
- View employee list
- Update employee details
- Delete employees
- User authentication and authorization (if implemented)

## Technologies Used
### Frontend (Angular 18)
- Angular CLI
- TypeScript
- HTML, CSS, Bootstrap (or Material UI)
- Angular Services and Components
- HTTP Client for API communication

### Backend (Spring Boot)
- Java
- Spring Boot
- Spring Data JPA
- Spring MVC
- MySQL Database
- Hibernate ORM
- REST API

### Database
- MySQL

## Project Setup

### Backend Setup (Spring Boot)
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/employee-management-system.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd project/Backend
   ```
3. Configure the `application.properties` file with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employeedb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
4. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup (Angular)
1. Navigate to the frontend directory:
   ```sh
   cd project/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular application:
   ```sh
   ng serve --open
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Add a new employee |
| PUT | /api/employees/{id} | Update employee details |
| DELETE | /api/employees/{id} | Delete an employee |

## Future Enhancements
- Implement JWT authentication
- Role-based access control
- Pagination for employee list
