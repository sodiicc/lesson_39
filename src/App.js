
import './App.css';
import Country from './components/Country';
import ErrorBoundary from './components/ErrorBoundary';
// import FormikComponent from './components/FormikComponent';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <ErrorBoundary text='USER'>
        <User />
      </ErrorBoundary>
      <ErrorBoundary text='COUNTRY'>
        <Country />
      </ErrorBoundary>
      {/* <FormikComponent>
        
      </FormikComponent> */}
    </div>
  );
}

export default App;
