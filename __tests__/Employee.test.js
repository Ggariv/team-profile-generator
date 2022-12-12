const Employee = require("../lib/Employee.js");
test('creates an employee object', () => {
    const employee = new Employee("Alpha", "01", "alpha01@gmail.com");
    expect(employee.name).toBe("Alpha");
    expect(employee.id).toBe("01");
    expect(employee.email).toBe("alpha01@gmail.com");
    });