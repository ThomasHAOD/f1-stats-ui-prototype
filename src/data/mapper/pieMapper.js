import { placeLookup } from './placeLookup';

export const pieMapper = (dataObject, options) => {
  const dataArray = [];
  for (let dataPoint in dataObject) {
    const idLabel = placeLookup[dataPoint];
    const mappedData = {
      id: idLabel,
      label: idLabel,
      value: dataObject[dataPoint],
    };
    dataArray.push(mappedData);
  }

  return dataArray;
};
