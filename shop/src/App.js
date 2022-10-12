import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [items] = useState(data)
  console.log(items)
  let [img, setImg] = useState(['neat1', 'outer1', 'shoes1'])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='logo'>Any Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          
          <Card items={items[0]}></Card>
          <Card items={items[1]}></Card>
          <Card items={items[2]}></Card>

        </div>
      </div> 
    </div>
    
  );
}

function Card(props, img, i){
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL+'/img/'+( img[i] )+'.jpg'} alt="neat" width="80%" style={{cursor: 'pointer'}}/>
      <h4>{ props.items.title }</h4>
      <p>{ props.items.content }</p>
      <p>{ props.items.price }</p>
    </div>
  )
}

export default App;
