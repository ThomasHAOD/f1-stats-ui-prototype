import './App.css';
import ChartWrapper from './charts/chartWrapper';
import Pie from './charts/pie';
import Bump from './charts/line';
import { finishingPositionData } from './data/finishingPositionsData';
import { resultByDriverAndYear } from './data/resultByDriverAndYear';
import { reducer } from './data/reducer/reducer';
import { pieMapper } from './data/mapper/pieMapper';
import { driverYearMapper } from './data/mapper/driverYearMapper';

function App() {
  const reducedData = reducer(finishingPositionData);
  const mappedData = pieMapper(reducedData);
  const mappedSeasonData = driverYearMapper(resultByDriverAndYear);
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <ChartWrapper title='Lewis Hamilton Finishing Positions'>
          <Pie data={mappedData} />
        </ChartWrapper> */}
        <ChartWrapper title='Lewis Hamilton Finishing Positions'>
          <Bump data={mappedSeasonData} />
        </ChartWrapper>
      </header>
    </div>
  );
}

export default App;
