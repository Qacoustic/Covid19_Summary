import { useEffect } from 'react';
import Header from './components/Header';
import Table from './components/table/Table.jsx'
import { getCovidSummaryAction } from './actions/action'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const getCovidInfo = async () => dispatch(getCovidSummaryAction());

  useEffect(() => {
    getCovidInfo();
  }, [])

  return (
    <>
      <Header />
      <div className="flexcontainer">
        <Table />
      </div>
    </>
  );
}

export default App;
