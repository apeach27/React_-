import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// [컴포넌트의 Lifecycle]
// 페이지에 장착되는 (mount)
// 가끔 업데이트 되는 (update)
// 필요없으면 제거되는 (unmount)

function Detail(props){

  useEffect(()=>{
    for(let i=0; i<10000; i++){
      console.log(1);
    }

    // useEffect 안에 적는 코드들은 
    // - 어려운 연산
    // - 서버에서 데이터 가져오는 작업
    // - 타이머 장작


  })

  let [count, setCount] = useState(0)

  const navigate = useNavigate();
  let {id} = useParams();

  // 자료순서 고유아이디 활용
  let 찾은상품 = props.items.find(function(a){
    return a.id==id
  })

  return (
    <>
      <div className="col-md-6">
        <img src={'/img/item'+id+'.jpg'} alt="Detail_items" width="100%" />

        {count}<br/>
        <button onClick={()=>{setCount(count+1)}}>click</button>
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