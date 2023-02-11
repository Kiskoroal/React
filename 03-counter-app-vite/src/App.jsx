// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

function App() {

  return (
    <div className="App">
      {/* <FirstApp
       title='Kisko'
       subtitle = 'Hoola'
       name='Francisco Rodríguez' 
      /> */}
      <CounterApp 
      value = {10}
      />
    </div>
  )
}

export default App;