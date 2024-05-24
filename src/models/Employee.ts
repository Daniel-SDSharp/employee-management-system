// src/models/Employee.ts

/**
 * Represents an Employee.
 */
export class Employee {
    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public post: string,
        public department: string,
        public salary: number
    ) {}
}
