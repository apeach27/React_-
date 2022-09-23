/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "도현도현";
  let [글제목, setTitle] = useState(['남자 코트 추천', '맛집추천', '코딩공부']);
  let [좋아요, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  // 1. import { useState }
  // 2. useState {보관할 자료}
  // 3. let [작명, 작명]
  // state 쓰는 이유 : 변동시 html 자동 재렌더링 해줌

  let num = [1, 2]
  let [a, c] = [1, 2];
  // 참고. Destructuring 문법


  [1,2,3].map(function(a){ // array 갯수만큼 코드 실행
    // console.log(a);
    return '123'; // return으로 담으면 array로 담아줌
  })

  return (
    <div className="App">
      <div className="black-nav"> {/* class 넣을 땐 className */}
        <h4 style={{color:'pink', fontSize:'16px'}}>BLOG</h4> {/* style 넣을 땐 style={{이름:'값'}} */}
      </div>
      <h4>{post}</h4> {/* 데이터바인딩 {중괄호} */}
      
      <button onClick={ ()=>{
        let copy = [...글제목]; // ... : 괄호 벗겨주세요
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      } }>setTitle</button>

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

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{ setCount(좋아요+1) } }>💘</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div> 
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}


      { // map 함수
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4>{ 글제목[i] } 
              <span onClick={ ()=>{
                let copy = [...좋아요];
                copy[i] = copy[i]+1;
                // console.log(copy[i]);
                setCount(copy) }}>💘
              </span> {좋아요[i]}
            </h4>
            <p>2월 18일 발행</p>
          </div>
          )
        })
      }

      {
        // 삼항연산자
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        //1 == 1 ? '맞음':'아님'
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

// 컴포넌트 만들기
function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
