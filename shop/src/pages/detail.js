import { useParams, useNavigate } from "react-router-dom";

function Detail(props){

  const navigate = useNavigate();
  let {id} = useParams();

  // 자료순서 고유아이디 활용
  let 찾은상품 = props.items.find(function(a){
    return a.id==id
  })

  return (
    <>
      <div className="col-md-6">

        <img src={process.env.PUBLIC_URL+'/img/item'+id+'.jpg'} alt="Detail_items" width="100%" />
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