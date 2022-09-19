import logo from './logo.svg';
import './App.css';
import CreateForm from './components/CreateForm';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <CreateForm />
      <ItemList />
    </div>
  );
}

export default App;
