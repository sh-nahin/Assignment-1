"use strict";
function multiplyValue(value, multiplier) {
    return value * (multiplier ?? 2);
}
function processInput(value) {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        return value ? 'Active' : 'Inactive';
    }
    return value;
}
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    return arrays.flat();
}
function getPopularCourses(courses, minStudents) {
    return courses.filter(course => course.isPublished == true && course.students >= minStudents);
}
function pluckValues(items, key) {
    return items.map(item => item[key]);
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of Engineering: ${this.name} `;
    }
}
async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Access Granted");
            }
            else {
                reject(Error("Access Denied: Must be 18 or older"));
            }
        }, 1000);
    });
}
