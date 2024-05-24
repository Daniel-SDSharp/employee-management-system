"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/controllers/employeesController.ts
const express_1 = require("express");
const EmployeeManager_1 = require("../services/EmployeeManager");
const router = (0, express_1.Router)();
const employeeManager = new EmployeeManager_1.EmployeeManager();
/**
 * Adds mock data to the employee list.
 */
router.post('/employees/mock', (req, res) => {
    const mockData = req.body;
    employeeManager.addMockData(mockData);
    res.status(201).json({ message: 'Mock data added' });
});
/**
 * Adds a new employee.
 */
router.post('/employees', (req, res) => {
    const newEmployee = employeeManager.addEmployee(req.body);
    res.status(201).json(newEmployee);
});
/**
 * Gets a list of all employees.
 */
router.get('/employees', (req, res) => {
    res.json(employeeManager.listEmployees());
});
/**
 * Gets an employee by ID.
 */
router.get('/employees/:id', (req, res) => {
    const employee = employeeManager.getEmployeeById(parseInt(req.params.id, 10));
    if (employee) {
        res.json(employee);
    }
    else {
        res.status(404).send('Employee not found');
    }
});
/**
 * Updates an employee by ID.
 */
router.put('/employees/:id', (req, res) => {
    const updatedEmployee = employeeManager.updateEmployee(parseInt(req.params.id, 10), req.body);
    if (updatedEmployee) {
        res.json(updatedEmployee);
    }
    else {
        res.status(404).send('Employee not found');
    }
});
/**
 * Deletes an employee by ID.
 */
router.delete('/employees/:id', (req, res) => {
    const deletedEmployee = employeeManager.deleteEmployee(parseInt(req.params.id, 10));
    if (deletedEmployee) {
        res.json(deletedEmployee);
    }
    else {
        res.status(404).send('Employee not found');
    }
});
exports.default = router;
