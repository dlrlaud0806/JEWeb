import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import EditModal from './EditModal';

const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기

  let refresh = false;
  // axios.get('/api/test')
  // .then((Response)=>{console.log(Response.data.products)})
  // .catch((Error)=>{console.log(Error)})
  useEffect(() => {
    axios.get('/api/listBoard')
      .then(res => setInfo(res.data.products))
      .catch(err => console.log(err));
    refresh = false;
  }, [refresh]);




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


  return (
    <div className="container">
      <div className='fs-3 fw-bolder lh-lg text-center'> 블로그 리뷰 리스트</div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className='table'>
            <tr className='table-light'>
              <th className="w-auto text-center">요청일</th>
              <th className="w-auto text-center">요청자</th>
              <th className="w-auto text-center">업체명</th>
              <th className="w-auto text-center">작성일</th>
              <th className="w-auto text-center">입금은행</th>
              <th className="w-auto text-center">금액</th>
              <th className="w-auto text-center">입금여부</th>
              <th className="w-auto text-center">Edit</th>
              <th className="w-auto text-center">Delete</th>
            </tr>
          </thead>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
        </table>
      </div>
      {/* { <Post onSaveData={handleSave} /> */}
      {/* {modalOn && <EditModal selectedData={selected} handleCancel={handleCancel}
        handleEditSubmit={handleEditSubmit} />} */}
    </div>
  );
};

export default Board;