import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail.js';
import axios from 'axios';

function App() {

  let [items, setItems] = useState(data)
  //console.log(items)
  let navigate = useNavigate(); // 페이지 이동 훅
  let [cnt, setCnt] = useState(2);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className='logo'>Any Store</Navbar.Brand>
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
                    return( <Card items={ items[i] } i={ i } key={i}></Card> )
                  })
                }
              </div>
            </div> 
            <button className='btn btn-outline-success' onClick={()=>{

              axios.get("https://codingapple1.github.io/shop/data"+cnt+`.json`)
              .then((result)=>{ 
                console.log(result.data)
                // let copy = [...items, ...result.data];
                setItems ([...items, ...result.data]);
                setCnt(cnt+1);

              })
              .catch(()=>{ 
                console.log('실패!!!');
                alert('상품정보가 없습니다.');

              })
            }}>더보기</button>
          </>

        } />

        {/* 페이지 여러개  */}
        {/* :URL 파라미터  */}
        <Route path='/detail/:id' element={<Detail items={items}/>} />

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
      <Link to={'/detail/' + (props.i)}>
        <img src={'/img/item' + (props.i) + '.jpg'} alt="items" width="80%" style={{cursor: 'pointer'}}/>
      </Link>
      <h4>{ props.items.title }</h4>
      <p>{ props.items.content }</p>
      <p>{ props.items.price }</p>
    </div>
  )
}

export default App;
