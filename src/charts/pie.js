import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const pie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.9}
    cornerRadius={8}
    theme={{
      tooltip: { container: { color: 'slategrey', fontSize: 15 } },
    }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextColor='#333333'
    radialLabelsLinkColor={{ from: 'color' }}
    sliceLabelsSkipAngle={10}
    sliceLabelsTextColor='#333333'
  />
);

export default pie;
