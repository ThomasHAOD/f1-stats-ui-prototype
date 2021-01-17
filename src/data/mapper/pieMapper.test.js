import { pieMapper } from './pieMapper';

const inputData = {
  dnf: 2,
  9: 1,
  3: 3,
  5: 1,
  13: 1,
};

const expectedOutput = [
  {
    id: '9th',
    label: '9th',
    value: 1,
  },
  {
    id: '5th',
    label: '5th',
    value: 1,
  },
  {
    id: '3rd',
    label: '3rd',
    value: 3,
  },
  {
    id: '13th',
    label: '13th',
    value: 1,
  },
  {
    id: 'dnf',
    label: 'dnf',
    value: 2,
  },
];

describe('pie data mapper function', () => {
  it('should return an array', () => {
    const output = pieMapper({});
    expect(output).toStrictEqual([]);
  });

  it('should create an array of the correct length', () => {
    const output = pieMapper(inputData);
    expect(output.length).toStrictEqual(expectedOutput.length);
  });

  it('should contain values as expected', () => {
    const output = pieMapper(inputData);

    expectedOutput.forEach((object) => {
      expect(output).toContainEqual(object);
    });
  });
});
