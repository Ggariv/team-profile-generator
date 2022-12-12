const Engineer = require("../lib/Engineer.js");
test('creates engineer object', () => {
    const engineer = new Engineer('Epsilon', '03', 'epsilon03@gmail.com', 'epsilongithub');
    expect(engineer.name).toBe('Epsilon');
    expect(engineer.id).toBe('03');
    expect(engineer.email).toBe('epsilon03@gmail.com');
    expect(engineer.github).toBe('epsilongithub');
    });