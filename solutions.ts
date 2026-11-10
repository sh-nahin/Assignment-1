function multiplyValue
    (value: number, multiplier: number):
    number 
    {
    return value * (multiplier ?? 2);
    }

function processInput(value: string | number | boolean): string | number {
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

function formatCoordinate
    (coordinate: readonly [number, number, string]):
    string {
        const [latitude, longitude, locationName] = coordinate;
        return `Location: ${locationName} (${latitude}, ${longitude})`;
    }

function concatenateArrays
    <T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
function getPopularCourses
    (courses: Course[], minStudents: number): Course[] 
    {
    return courses.filter
    (course => course.isPublished == true && course.students >= minStudents);
}

function pluckValues 
    <T, K  extends keyof T>(items: T[], key: K): T[K][] 
    {
    return items.map(item => item[key]);
    }

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of Engineering: ${this.name} `;
    }

}

async function validateAgeAsync
 (age: number): Promise<string> {
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