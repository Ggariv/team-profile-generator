const Intern = require("../lib/Intern.js");
test('creates intern object', () => {
    const intern = new Intern('Gamma', '04', 'gamma04@gmail.com', 'school of gamma');
    expect(intern.name).toBe('Gamma');
    expect(intern.id).toBe('04');
    expect(intern.email).toBe('gamma04@gmail.com');
    expect(intern.school).toBe('school of gamma');
    });