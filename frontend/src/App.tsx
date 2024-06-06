import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <h1>Explore something new every day!</h1>
              <small>Uncle-T Catering</small>
            </>
          }/>
        </Routes>
      </Router>
  );
};

export default App;
