import { reducer } from './reducer';

const testData = [
  {
    grid: 1,
  },
  {
    grid: 9,
  },
  {
    grid: 3,
  },
  {
    grid: 5,
  },
  {
    grid: 3,
  },
  {
    grid: 3,
  },
  {
    grid: 1,
  },
  {
    grid: 13,
  },
];
const testDataWithDNF = [
  {
    grid: null,
  },
  {
    grid: 9,
  },
  {
    grid: 3,
  },
  {
    grid: 5,
  },
  {
    grid: 3,
  },
  {
    grid: 3,
  },
  {
    grid: null,
  },
  {
    grid: 13,
  },
];

const expectedReducedData = {
  1: 2,
  9: 1,
  3: 3,
  5: 1,
  13: 1,
};
const expectedReducedDataWithDNF = {
  dnf: 2,
  9: 1,
  3: 3,
  5: 1,
  13: 1,
};

describe('array to object reducer', () => {
  it('should return an object', () => {
    const output = reducer([]);
    expect(output).toMatchObject({});
  });

  it('should return the expected data with one type of key', () => {
    const output = reducer(testData);
    expect(output).toMatchObject(expectedReducedData);
  });
  it('should handle null finishes as DNF', () => {
    const output = reducer(testDataWithDNF);
    expect(output).toMatchObject(expectedReducedDataWithDNF);
  });
});
