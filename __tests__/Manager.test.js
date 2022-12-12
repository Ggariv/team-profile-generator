const Manager = require('../lib/Manager.js');
test('creates manager object', () => {
    const manager = new Manager('Beta', '02', 'beta@gmail.com', '03');
    expect(manager.name).toBe('Beta');
    expect(manager.id).toBe('02');
    expect(manager.email).toBe('beta@gmail.com');
    expect(manager.officeNumber).toBe('03');
    });