# Employee Management System

This project is an Employee Management System built using Node.js, Express, and TypeScript.

## Requirements

- Node.js
- npm (Node Package Manager)

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   cd employee-management-system
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Build the project:

   ```sh
   npm run build
   ```

4. Start the server:

   ```sh
   npm start
   ```

   Or, to start the server in development mode with automatic restarts using `nodemon`:

   ```sh
   npm run dev
   ```

## API Endpoints

### Base URL

The base URL for all endpoints is `http://localhost:3000/api`.

### Add Mock Data

#### POST `/employees/mock`

Adds mock employee data to the system.

- **Request Body**: 

  ```json
  [
      { "name": "John", "lastName": "Doe", "post": "Developer", "department": "IT", "salary": 60000 },
      { "name": "Jane", "lastName": "Smith", "post": "Manager", "department": "Sales", "salary": 75000 },
      { "name": "Alice", "lastName": "Johnson", "post": "Designer", "department": "Marketing", "salary": 55000 },
      { "name": "Bob", "lastName": "Brown", "post": "Developer", "department": "IT", "salary": 62000 },
      { "name": "Charlie", "lastName": "Davis", "post": "Support", "department": "Customer Service", "salary": 40000 },
      { "name": "Eve", "lastName": "Miller", "post": "HR Specialist", "department": "HR", "salary": 50000 },
      { "name": "Frank", "lastName": "Wilson", "post": "Analyst", "department": "Finance", "salary": 70000 },
      { "name": "Grace", "lastName": "Taylor", "post": "Product Manager", "department": "Product", "salary": 80000 },
      { "name": "Hank", "lastName": "Anderson", "post": "Engineer", "department": "Engineering", "salary": 68000 },
      { "name": "Ivy", "lastName": "Thomas", "post": "Consultant", "department": "Consulting", "salary": 72000 },
      { "name": "Jack", "lastName": "White", "post": "Lead Developer", "department": "IT", "salary": 90000 },
      { "name": "Karen", "lastName": "Green", "post": "Sales Representative", "department": "Sales", "salary": 45000 },
      { "name": "Leo", "lastName": "King", "post": "Marketing Specialist", "department": "Marketing", "salary": 48000 },
      { "name": "Mia", "lastName": "Scott", "post": "Finance Manager", "department": "Finance", "salary": 85000 },
      { "name": "Nina", "lastName": "Hill", "post": "HR Manager", "department": "HR", "salary": 78000 },
      { "name": "Oscar", "lastName": "Lewis", "post": "Customer Support Manager", "department": "Customer Service", "salary": 52000 },
      { "name": "Paul", "lastName": "Young", "post": "Consultant", "department": "Consulting", "salary": 68000 },
      { "name": "Quincy", "lastName": "Wright", "post": "Junior Developer", "department": "IT", "salary": 50000 },
      { "name": "Rachel", "lastName": "Adams", "post": "UX Designer", "department": "Design", "salary": 60000 }
  ]

- **Response**: 201 Created

### Add a New Employee

#### POST `/employees`

Adds a new employee.

- **Request Body**: JSON object representing the employee (without `id`).

**Example Body:**

```json
{
    "name": "John",
    "lastName": "Doe",
    "post": "Developer",
    "department": "IT",
    "salary": 60000
}
```

- **Response**: 201 Created

### List All Employees

#### GET `/employees`

Lists all employees.

- **Response**: 200 OK

### Get an Employee by ID

#### GET `/employees/:id`

Gets an employee by ID.

- **Path Parameters**: `id` (integer)

- **Response**: 200 OK

  Or 404 Not Found if the employee does not exist.

### Update an Employee by ID

#### PUT `/employees/:id`

Updates an employee by ID.

- **Path Parameters**: `id` (integer)
- **Request Body**: JSON object with updated employee data (partial or full).

**Example Body:**

```json
{
    "post": "Senior Developer",
    "salary": 65000
}
```

- **Response**: 200 OK

  Or 404 Not Found if the employee does not exist.

### Delete an Employee by ID

#### DELETE `/employees/:id`

Deletes an employee by ID.

- **Path Parameters**: `id` (integer)

- **Response**: 200 OK

  Or 404 Not Found if the employee does not exist.