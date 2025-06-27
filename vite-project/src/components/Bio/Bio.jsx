
import PersonFunc from '../PersonFunc/PersonFunc'

function Bio() {
 
    const user = {
    name: 'Lucía',
    surname: 'Fernández',
    age: 32
  };

  return (

    <section>
      <h2>Sobre esta app</h2>
      <p>Mostramos una persona con componente funcional</p>

      <h3>Persona Componente Funcional</h3>
      <PersonFunc
        name={user.name}
        surname={user.surname}
        age={user.age}
      />
    </section>
  );
}

export default Bio;
