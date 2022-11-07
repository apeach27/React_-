import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, UNSAFE_DataRouterStateContext } from 'react-router-dom'
import Detail from './pages/detail.js';

function App() {

  let [items] = useState(data)
  //console.log(items)
  let navigate = useNavigate();

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
      
              <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail') }}>상세페이지</Nav.Link>
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

        <Route path='/detail' element={<Detail/>} />

        {/* nested routes */}
        {/* nested routes의 element 보여주는 곳은 <Outlet> */}
        <Route path='/about' element={<About/>} >
          <Route path='member' element={<div>Member</div>} />
          <Route path='location' element={<div>위치정보</div>} />
        </Route>
        
        <Route path='*' element={<div>없는 페이지입니다.</div>} />

      </Routes>

    </div>
    
  );
}
function About(){
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
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

// 221107
// 폴더구조 만들기
// pages 폴더 생성 --> 페이지.js 다 모아놓을 것임

export default App;
