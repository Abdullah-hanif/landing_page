import headerBg from './assets/MaskGroup(1).png';
import page1 from './assets/page1.png';
import page2 from './assets/page2.png';
import page3 from './assets/page3.png';
import page4 from './assets/page4.png';
import page5 from './assets/page5.png';
import page6 from './assets/page6.png';
import page7 from './assets/page7.png';
import '../src/App.css';
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

function App() {
  return (
    <div className="main-container" >
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#RoadMaps">RoadMaps</Nav.Link>
            <Nav.Link href="#FAQs">FAQs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='header'>
        {/* <img className='headerBg' src={headerBg} alt='' /> */}
        <h1 className="h1">Welcome to the Bored Ape Family</h1>
             
     </div>
<div>
  <img  src={page1} alt='' />
  <img  style={{paddingLeft:'10px'}} src={page2} alt='' />
  <img  src={page3} alt='' />
  <img  style={{paddingRight:'50px'}} src={page4} alt='' />
  <img   src={page5} alt='' />
  <img   src={page6} alt='' />
  <img   src={page7} alt='' />
</div>
           

        {/* footer */}
             {/* <div> <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>*/}

    </div> 
  );
}

export default App;
