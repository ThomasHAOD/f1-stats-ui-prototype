import './App.css';
import ChartWrapper from './charts/chartWrapper';
import Pie from './charts/pie';
import { finishingPositionData } from './data/finishingPositionsData';
import { reducer } from './data/reducer/reducer';
import { pieMapper } from './data/mapper/pieMapper';

function App() {
  const reducedData = reducer(finishingPositionData);
  const mappedData = pieMapper(reducedData);
  return (
    <div className='App'>
      <header className='App-header'>
        <ChartWrapper title='Lewis Hamilton Finishing Positions'>
          <Pie data={mappedData} />
        </ChartWrapper>
      </header>
    </div>
  );
}

export default App;
