// src/controllers/employeesController.ts
import { Router, Request, Response } from 'express';
import { EmployeeManager } from '../services/EmployeeManager';

const router = Router();
const employeeManager = new EmployeeManager();

/**
 * Adds mock data to the employee list.
 */
router.post('/employees/mock', (req: Request, res: Response) => {
    const mockData = req.body;
    employeeManager.addMockData(mockData);
    res.status(201).json({ message: 'Mock data added' });
});

/**
 * Adds a new employee.
 */
router.post('/employees', (req: Request, res: Response) => {
    const newEmployee = employeeManager.addEmployee(req.body);
    res.status(201).json(newEmployee);
});

/**
 * Gets a list of all employees.
 */
router.get('/employees', (req: Request, res: Response) => {
    res.json(employeeManager.listEmployees());
});

/**
 * Gets an employee by ID.
 */
router.get('/employees/:id', (req: Request, res: Response) => {
    const employee = employeeManager.getEmployeeById(parseInt(req.params.id, 10));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
});

/**
 * Updates an employee by ID.
 */
router.put('/employees/:id', (req: Request, res: Response) => {
    const updatedEmployee = employeeManager.updateEmployee(parseInt(req.params.id, 10), req.body);
    if (updatedEmployee) {
        res.json(updatedEmployee);
    } else {
        res.status(404).send('Employee not found');
    }
});

/**
 * Deletes an employee by ID.
 */
router.delete('/employees/:id', (req: Request, res: Response) => {
    const deletedEmployee = employeeManager.deleteEmployee(parseInt(req.params.id, 10));
    if (deletedEmployee) {
        res.json(deletedEmployee);
    } else {
        res.status(404).send('Employee not found');
    }
});

export default router;
