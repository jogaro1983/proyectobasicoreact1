import logo from './logo.svg';
import './App.css';

import Comunes from './components/Comunes'
import Cabecera from './components/Cabecera';

function App() {
  return (
    <div className="App">
      <p>Nuevos datos</p>
      <section className="componentes"><Comunes/></section>  
      <header className="cabecera"><Cabecera/></header>
    </div> 
    );
}

export default App;
