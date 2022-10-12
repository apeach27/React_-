import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [items] = useState(data)
  console.log(items)
  let [img, setImg] = useState(['neat1', 'outer1', 'shoes1'])

  return (
    <div className="App">

      <Routes>
        <Route path='/datail' element={<div></div>} />
        <Route/>
      </Routes>


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
              <Nav.Link href="#action2">Cart</Nav.Link>
      
              <Nav.Link href="#" disabled>
                도현도현
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
          {
            items.map((a, i) => {
              return(
                <Card items={ items[i] } i={ i }></Card>
              )
            })

          }


        </div>
      </div> 
    </div>
    
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL+'/img/item' + (props.i) + '.jpg'} alt="items" width="80%" style={{cursor: 'pointer'}}/>
      <h4>{ props.items.title }</h4>
      <p>{ props.items.content }</p>
      <p>{ props.items.price }</p>
    </div>
  )
}

export default App;
