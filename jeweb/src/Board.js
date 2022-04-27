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

//더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSave = (data) => {
    //데이터 수정하기
    if (data.id) { //수정 데이터에는 id가 존재
      setInfo(
        info.map(row => data.id === row.id ? {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
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
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website
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
      website: item.website
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
      <table className="table table-bordered">
        <thead className='justify-between'>
          <tr className='table-light'>
            <th className="text-gray-300 px-4 py-3">요청일</th>
            <th className="text-gray-300 px-4 py-3">요청자</th>
            <th className="text-gray-300 px-4 py-3">업체명</th>
            <th className="text-gray-300 px-4 py-3">작성일</th>
            <th className="text-gray-300 px-4 py-3">입금은행</th>
            <th className="text-gray-300 px-4 py-3">금액</th>
            <th className="text-gray-300 px-4 py-3">입금여부</th>
            <th className="text-gray-300 px-4 py-3">Edit</th>
            <th className="text-gray-300 px-4 py-3">Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      <Post onSaveData={handleSave} />
      {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} 
      handleEditSubmit={handleEditSubmit} />}
    </div>
  );
};

export default Board;