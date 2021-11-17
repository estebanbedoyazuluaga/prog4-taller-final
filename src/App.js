import logo from './logo.png';
import rikka from './rikka.gif';
import './App.css';
import MiFooter from './components/footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, ButtonGroup, ListGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Image src={logo} width="30%" className="margin-and-center" />
      <h2>Takanashi Rikka</h2>
      <p>
        Takanashi Rikka (小鳥遊 六花) Es la protagonista femenina de la serie de novelas ligeras japonesas y anime, <em>Chunibiyou Demo Koi ga Shitai!</em>.
      </p>

      <ButtonGroup className="margin-and-center">
        <Button variant="primary" >Inicio</Button>
        <Button variant="secondary" >Educación</Button>
        <Button variant="secondary" >Experiencia</Button>
      </ButtonGroup>

      <h2>Información Personal</h2>
      <div className="margin-and-center">
        <Image src={rikka} width="300px" height="300px" className="spin" alt="[spinning rikka]" roundedCircle />
      </div>  
      <div className="info margin-and-center">
        <ListGroup>
          <ListGroup.Item>Edad: 17</ListGroup.Item>
          <ListGroup.Item>Nombre en japonés: 小鳥遊 六花</ListGroup.Item>
          <ListGroup.Item>Traducción en romanji: Takanashi Rikka</ListGroup.Item>
          <ListGroup.Item>Cumpleaños: 12 de Junio</ListGroup.Item>
        </ListGroup>
      </div>
      <h2>Información de Perfil</h2>

      <div className="info margin-and-center">
        <ListGroup>
          <ListGroup.Item>Perfil: High School Freshman, Tyrant's Eye</ListGroup.Item>
          <ListGroup.Item>Idiomas: Japonés</ListGroup.Item>
        </ListGroup>
      </div>
      <MiFooter />
    </div>
  );
}

export default App;
