
function Detail(props){


  return (
    <>
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL+'/img/item0.jpg'} alt="Detail_items" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{props.items[0].title}</h4>
        <p>{props.items[0].content}</p>
        <p>{props.items[0].price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </>
  )
}

export default Detail;