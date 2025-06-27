import './App.css'
import PersonClass from './components/PersonClass/PersonClass'
import PersonFunc from './components/PersonFunc/PersonFunc'
import Header from './components/Header/Header'
import Bio from './components/Bio/Bio';

function App() {
  
  return (

    <div>

      <Header />
      <Bio />

      {/* <h2>Componente Funcional</h2>
      <PersonClass name="Ana" surname="López" age={28} />
      <PersonClass name="Juan" surname="Pérez" age={35} />
      <PersonClass name="María" surname="García" age={22} />

      <h2>Componente de Clase</h2>
      <PersonFunc name="Luis" surname="Martínez" age={30} />
      <PersonFunc name="Carla" surname="Rodríguez" age={27} />
      <PersonFunc name="Pedro" surname="Sánchez" age={40} /> 
      
      Esta seria la forma de mostrar desde aqui todos los valores pero para que
      quede mas ordenado lo muestro desde BIO*/}
    </div>
  )
}

export default App
