import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './detail.js';

function App() {

  let [items] = useState(data)
  console.log(items)

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
      
              <Link to={"/"}>홈</Link>
              <Link to={"/detail"}>상세페이지</Link>
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


      <Routes>
        <Route path='/' element={
          <>
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
          
          </>
        } />

        <Route path='/detail' element={
          <>
          <div className="container">
            <div className="row">
              <Detail/>
            </div>
          </div>
          </>
        } />
      </Routes>

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
