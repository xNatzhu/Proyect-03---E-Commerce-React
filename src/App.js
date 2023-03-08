import './App.css';
import ItemListContainer from './Components/Item/ItemListContainer';
import Menu from './Components/menu/Menu';
function App() {
  return (
    <div>
      <div>
        <Menu></Menu>
      </div>
      <div>
        <ItemListContainer/>
      </div>
    </div>
    
  );
}

export default App;
