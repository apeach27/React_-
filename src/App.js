/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "도현도현";
  let [글제목, setTitle] = useState(['남자 코트 추천', '맛집추천', '코딩공부']);
  let [좋아요, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [mTitle, setmTitle] = useState(0);

  let num = [1, 2]
  let [a, c] = [1, 2];
  // 참고. Destructuring 문법

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'pink', fontSize:'16px'}}>BLOG</h4>
      </div>
      <h4>{post}</h4> 
      
      <button onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      } }>글제목 변경</button>

      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.sort();
        console.log(copy);
        setTitle(copy);
      } }>오름차순 정렬</button>

      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.sort( (a,b)=>{
          if(a < b) return 1;
          if(a > b) return -1;
          if(a === b) return 0;
        } );
        console.log(copy);
        setTitle(copy);
      } }>내림차순 정렬</button>

      { // map 함수
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4 onClick={()=>{ setModal(!modal); setmTitle(i) }}>{ 글제목[i] } 
              <span onClick={ ()=>{
                let copy = [...좋아요];
                copy[i] += 1;
                // console.log(copy[i]);
                setCount(copy) }}>💘
              </span> {좋아요[i]}
            </h4>
            <p>2월 18일 발행</p>
          </div>
          )
        })
      }

      <button onClick={()=>{ setmTitle(0) }}>글제목0</button>
      <button onClick={()=>{ setmTitle(1) }}>글제목1</button>
      <button onClick={()=>{ setmTitle(2) }}>글제목2</button>

      {
        modal == true ? <Modal 글제목={글제목} mTitle={mTitle} /> : null
        // 부모-->자식 state 전송하는법
        // <자식컴포넌트 작명={state이름}>
      }

    </div>
  );
}

// 컴포넌트 만들기
function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.글제목[props.mTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;
