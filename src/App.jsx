import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import Play from './page/Play';
import PlayList from './page/PlayList';
import Record from './page/Record';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Play />} />
        <Route path='/record' element={<Record />} />
        <Route path='/playlist' element={<PlayList />} />
      </Routes>
    </>
  );
}

export default App;
