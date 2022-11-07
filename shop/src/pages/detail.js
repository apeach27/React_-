import { useParams } from "react-router-dom";

function Detail(props){

  let {id} = useParams();

  return (
    <>
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL+'/img/item0.jpg'} alt="Detail_items" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.items[id=0].title}</h4>
        <p>{props.items[id].title}</p>
        <p>{props.items[id].price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </>
  )
}

export default Detail;