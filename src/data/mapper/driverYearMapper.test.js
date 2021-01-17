import { driverYearMapper } from './driverYearMapper';

const testInputArray = [
  {
    season: 2018,
    grid: 3,
    position: 3,
    statusRef: 'Finished',
    race: {
      round: 6,
      circuit: {
        name: 'Circuit de Monaco',
      },
    },
  },
  {
    season: 2018,
    grid: 1,
    position: 2,
    statusRef: 'Finished',
    race: {
      round: 1,
      circuit: {
        name: 'Albert Park Grand Prix Circuit',
      },
    },
  },
  {
    season: 2018,
    grid: 4,
    position: 4,
    statusRef: 'Finished',
    race: {
      round: 3,
      circuit: {
        name: 'Shanghai International Circuit',
      },
    },
  },
];

describe('drivers results by year mapper', () => {
  it('should return an array', () => {
    const output = driverYearMapper([]);
    console.log(output);
    expect(Array.isArray(output)).toBeTruthy();
  });

  it('should output one object for grid position', () => {
    const output = driverYearMapper(testInputArray);
    expect(output[0].id).toStrictEqual('grid');
  });
  it('should output one object for finishing position', () => {
    const output = driverYearMapper(testInputArray);
    expect(output[1].id).toStrictEqual('position');
  });
});
