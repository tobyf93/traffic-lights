const nextState = require('../lib/trafficLights');

describe('NS green-red transition', () => {
  let lights = [
    {
      name: 'NS',
      colour: 'GREEN'
    },
    {
      name: 'EW',
      colour: 'RED'
    }
  ];

  it('must turn orange', () => {
    lights = nextState(lights);
    expect(lights[0].colour).toBe('ORANGE');
  });
  it('must turn red, with other lights turning green', () => {
    lights = nextState(lights);
    expect(lights[0].colour).toBe('RED');
    expect(lights[1].colour).toBe('GREEN');
  });
});

describe('EW green-red transition', () => {
  let lights = [
    {
      name: 'NS',
      colour: 'RED'
    },
    {
      name: 'EW',
      colour: 'GREEN'
    }
  ];

  it('must turn orange', () => {
    lights = nextState(lights);
    expect(lights[1].colour).toBe('ORANGE');
  });
  it('must turn red, with other lights turning green', () => {
    lights = nextState(lights);
    expect(lights[0].colour).toBe('GREEN');
    expect(lights[1].colour).toBe('RED');
  });
});
