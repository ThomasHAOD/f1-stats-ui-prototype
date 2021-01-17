export const driverYearMapper = (array) => {
  const sortedArray = array.sort((a, b) => {
    return a.race.round - b.race.round;
  });

  const reducePosAndGrid = (array, attribute) => {
    return array.reduce(
      (prev, curr) => {
        const dataPoint = {
          x: `${curr.race.round}: ${curr.race.circuit.name}`,
          y: curr[attribute],
        };
        prev.data.push(dataPoint);
        return prev;
      },
      { id: attribute, data: [] }
    );
  };

  const gridObject = reducePosAndGrid(sortedArray, 'grid');
  const positionObject = reducePosAndGrid(sortedArray, 'position');

  const mappingOutput = [gridObject, positionObject];
  console.log(mappingOutput);
  return mappingOutput;
};
