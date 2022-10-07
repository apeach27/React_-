import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['BIG LOGO KNIT PULLOVER IN IVORY', 'handmade wool trench CT', '버켄스탁 보스턴 퍼 모카 1020567'])

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
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/img/neat1.jpg'} alt="neat" width="80%"/>
            <h4>{ title[0] }</h4>
            <p>마뗑킴</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/img/outer1.jpg'} alt="=outer" width="80%"/>
            <h4>{ title[1] }</h4>
            <p>링서울</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+'/img/shoes1.jpg'} alt="shoes" width="80%"/>
            <h4>{ title[2] }</h4>
            <p>버켄스탁</p>
          </div>
        </div>
      </div> 



    </div>

    
  );
}

export default App;
