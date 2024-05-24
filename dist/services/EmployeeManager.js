"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
// src/services/EmployeeManager.ts
const Employee_1 = require("../models/Employee");
/**
 * Manages Employee operations such as add, update, delete, and list.
 */
class EmployeeManager {
    constructor() {
        this.employees = [];
        this.nextId = 1;
    }
    /**
     * Adds a new employee.
     * @param employeeData Data for the new employee.
     * @returns The newly created employee.
     */
    addEmployee(employeeData) {
        const newEmployee = new Employee_1.Employee(this.nextId++, employeeData.name, employeeData.lastName, employeeData.post, employeeData.department, employeeData.salary);
        this.employees.push(newEmployee);
        return newEmployee;
    }
    /**
     * Gets an employee by ID.
     * @param id Employee ID.
     * @returns The employee with the given ID, or undefined if not found.
     */
    getEmployeeById(id) {
        return this.employees.find(emp => emp.id === id);
    }
    /**
     * Lists all employees.
     * @returns An array of all employees.
     */
    listEmployees() {
        return this.employees;
    }
    /**
     * Updates an employee by ID.
     * @param id Employee ID.
     * @param updatedData Updated data for the employee.
     * @returns The updated employee, or null if not found.
     */
    updateEmployee(id, updatedData) {
        const employee = this.getEmployeeById(id);
        if (employee) {
            Object.assign(employee, updatedData);
            return employee;
        }
        return null;
    }
    /**
     * Deletes an employee by ID.
     * @param id Employee ID.
     * @returns The deleted employee, or null if not found.
     */
    deleteEmployee(id) {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            return this.employees.splice(index, 1)[0];
        }
        return null;
    }
    /**
     * Adds mock data to the employee list.
     * @param mockData Array of mock employee data.
     */
    addMockData(mockData) {
        mockData.forEach(data => this.addEmployee(data));
    }
}
exports.EmployeeManager = EmployeeManager;
