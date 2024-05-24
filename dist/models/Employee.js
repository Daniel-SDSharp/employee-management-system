"use strict";
// src/models/Employee.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
/**
 * Represents an Employee.
 */
class Employee {
    constructor(id, name, lastName, post, department, salary) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.post = post;
        this.department = department;
        this.salary = salary;
    }
}
exports.Employee = Employee;
