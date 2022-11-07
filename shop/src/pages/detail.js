function Detail(props){
    return (
      <>
      <div className="col-md-6">
        <img src={process.env.PUBLIC_URL+'/img/item1.jpg'} alt="Detail_items" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
      </>
    )
  }

export default Detail;