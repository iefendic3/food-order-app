import './App.css';
import Card from './components/Card/Card';
import FoodList from './components/FoodList/FoodList';
import Header from './components/Header/Header';
import {DUMMY_MEALS} from './data/dummy-meals'
function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Header />
      <Card className="bg-gray-700 w-1/2 ">
        <h1 className='text-white'>Welcome to Food Order Application</h1>
        <h2 className='text-white'>Below you can choose your meal from our selection. Enjoy!</h2>
      </Card>
      
      <FoodList meals={DUMMY_MEALS} />
      
      
    </div>
  );
}

export default App;
