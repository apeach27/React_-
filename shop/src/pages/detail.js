import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();

  // 자료순서 고유아이디 활용
  let 찾은상품 = props.items.find(function(a){
    return a.id==id
  })

  return (
    <>
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL+'/img/item0.jpg'} alt="Detail_items" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.title}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </>
  )
}

export default Detail;