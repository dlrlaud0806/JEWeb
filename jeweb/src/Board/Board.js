import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import EditModal from './EditModal';
import Paging from "./Paging";

const Board = () => {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [pageinfo, setPageInfo] = useState([]);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기

  // axios.get('/api/test')
  // .then((Response)=>{console.log(Response.data.products)})
  // .catch((Error)=>{console.log(Error)})
  useEffect(() => {
    axios.get('/api/listBoard')
      .then(res => setInfo(res.data.products))
      .catch(err => console.log(err));

    setPageInfo(pageinfo => info.slice((page - 1) * 10 + 1, page * 10));
  }, [page, info]);

  const handlePageChange = (page) => {
    console.log("handlepagechange", page);
    setPage(page);
    setPageInfo(pageinfo => info.slice((page - 1) * 10 + 1, page * 10));
  };

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
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
  };


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
          <Tr info={pageinfo} handleRemove={handleRemove} handleEdit={handleEdit} />
        </table>
      </div>
      <Paging page={page} count={info.length} handlePageChange={handlePageChange} />
      {/* { <Post onSaveData={handleSave} /> */}
      {/* {modalOn && <EditModal selectedData={selected} handleCancel={handleCancel}
        handleEditSubmit={handleEditSubmit} />} */}
    </div>
  );
};

export default Board;