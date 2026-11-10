Title: How Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP .
Introduction: Assess Modifier is the keywords which used inside the class to control the properties and methods. In OOP sometime we have protect data from all user so that can not modify directly. Thats why er use 4 modifyer- public, private, protective and Readonly
Public: It allow anyone to accessed the property. 
Ex: public name: string;
    constructor(name: string){
        this.name;
    }
    public getname(): string{
        return this.name;
    }
Private: It cannot access from subclass or outside of the class. 
Ex: class Employee {
    public name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}
Protected: It allows to accessed bye own class and subclass that inherit from that class. 
Ex: class Employee {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }

    public getEmployeeName(): string {
        return this.name;
    }
}
Readonly: This method can be accessed when it is decleared and inside the class construtor
Ex: class Employedd {
    readonly salary: number;
    name: string;

    constructor(salary: number,name: string){
        this.salary: Salary;
        this.name: Name;
    }
}

Conclosion: This this total my observation about Access Modifyers how work in different user. 