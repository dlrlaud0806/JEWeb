import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';

const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);


  // axios.get('/api/test')
  // .then((Response)=>{console.log(Response.data.products)})
  // .catch((Error)=>{console.log(Error)})
  useEffect(() => {
    axios.get('/api/test')
      .then(res => setInfo(res.data.products))
      .catch(err => console.log(err));
  }, []);

  const handleSave = (data) => {
    //데이터 수정하기
    if (data.idx) { //수정 데이터에는 id가 존재
      setInfo(
        info.map(row => data.idx === row.idx ? {
          id: data.idx,
          name: data.req_date,
          email: data.req_name,
          phone: data.brand_name,
          website: data.review_date,
          bank: data.bank,
          cost: data.cost,
          pay_yn: data.pay_yn,
        } : row))

    } else { //바로 추가하기
      // 데이터 추가하기 방법1
      // setInfo((prev) => {
      //   return [ ...prev, {
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website
      //   }]
      // });

      //데이터 추가하기 방법2
      setInfo(info => info.concat(
        {
          id: nextId.current,
          name: data.req_date,
          email: data.req_name,
          phone: data.brand_name,
          website: data.review_date,
          bank: data.bank,
          cost: data.cost,
          pay_yn: data.pay_yn,
        }
      ))
      nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
      bank: item.bank,
      cost: item.cost,
      pay_yn: item.pay_yn,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }

  return (
    <div className="container">
      <div className='fs-3 fw-bolder lh-lg text-center'> 블로그 리뷰 리스트</div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className='table'>
            <tr className='table-light'>
              <th className="w-auto">요청일</th>
              <th className="w-auto">요청자</th>
              <th className="w-auto">업체명</th>
              <th className="w-auto">작성일</th>
              <th className="w-auto">입금은행</th>
              <th className="w-auto">금액</th>
              <th className="w-auto">입금여부</th>
              <th className="w-auto">Edit</th>
              <th className="w-auto">Delete</th>
            </tr>
          </thead>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
        </table>
      </div>
      {/* <Post onSaveData={handleSave} />
      {modalOn && <Modal selectedData={selected} handleCancel={handleCancel}
        handleEditSubmit={handleEditSubmit} />} */}
    </div>
  );
};

export default Board;