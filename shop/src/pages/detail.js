import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detail(props){

  const navigate = useNavigate();
  let {id} = useParams();
  // 자료순서 고유아이디 활용
  let 찾은상품 = props.items.find(function(a){
    return a.id==id
  })

  let [count, setCount] = useState(0)
  let [alert1, setAlert] = useState(true) // 스위치 생성
  let [num, setNum] = useState('')

  useEffect(() => {
    if(isNaN(num) == true){
      alert('숫자만입력')
    }
  }, [num])

  useEffect(() => {
    setTimeout(() => {setAlert(false)}, 5000) 
    console.log(1) // 출력되지 않는 것을 확인할 수 있음
    
    return ()=>{ // useEffect 동작 전에 실행 됨

    }
  }, []) // 컴포넌트 mount시 1회만 실행하고 싶을 때 사용



  return (
    <>
      <div className="col-md-6">
        {
          alert1 == true        
          ? <div className="alert-warning">
            5초 이내 구매시 할인
          </div>
          : null
        }
        {count}<br/>
        <button onClick={()=>{setCount(count+1)}}>click</button>
        <img src={'/img/item'+id+'.jpg'} alt="Detail_items" width="100%" />
        <input onChange={(e)=> setNum(e.target.value) } />

      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
        <button className="btn btn-danger" onClick={()=>navigate(-1)}>뒤로가기</button> 

      </div>
    </>
  )
}

export default Detail;