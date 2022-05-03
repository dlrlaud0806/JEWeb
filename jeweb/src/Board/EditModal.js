import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { dateFormat } from '../utils';

const EditModal = (props) => {
  const [edited, setEdited] = useState(props.info);

  const onCancel = () => {
    props.handleCancel();
  }

  const onEditChange = (e) => {
    setEdited({ //문법
      ...edited,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitEdit = (e) => {
    e.preventDefault();
    props.handleEditSubmit(edited);
  }
  const predata = props.info;
  let rdate = dateFormat(predata.req_date);
  let rvdate = dateFormat(predata.review_date);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          정보 수정하기
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmitEdit}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">요청일</span>
            <input type="text" class="form-control" placeholder={rdate} aria-label="requestDate" aria-describedby="basic-addon1" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">요청자</span>
            <input type="text" class="form-control" placeholder={props.info.req_name} aria-label="requestName" aria-describedby="basic-addon2" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">업체명</span>
            <input type="text" class="form-control" placeholder={props.info.brand_name} aria-label="brandName" aria-describedby="basic-addon3" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon4">작성일</span>
            <input type="text" class="form-control" placeholder={rvdate} aria-label="reviewDate" aria-describedby="basic-addon4" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon5">은행명</span>
            <input type="text" class="form-control" placeholder={props.info.bank_name} aria-label="bankName" aria-describedby="basic-addon5" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon6">금액</span>
            <input type="text" class="form-control" placeholder={props.info.cost} aria-label="cost" aria-describedby="basic-addon6" />
          </div>

          <div class="input-group mb-2">
            <label class="input-group-text" for="inputYnSelect01">입금여부</label>
            <select class="form-select" id="inputYnSelect01">
              <option selected>{props.info.pay_yn}</option>
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>취소</Button>
        <Button type='submit' className="btn btn-primary">수정</Button>
      </Modal.Footer>
    </Modal >

    // <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center 
    // bg-black bg-opacity-70">
    //   <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
    //     <div className="border-b px-4 py-2 flex justify-between items-center">
    //       <h3 className="font-semibold text-lg">고객 정보 수정하기</h3>
    //       <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
    //     </div>
    //     <form onSubmit={onSubmitEdit}>
    //       <div class="p-3">

    //         <div>ID: {edited.id}</div>
    //         <div>Name: <input className='border-2 border-gray-100' type='text' name='name'
    //           value={edited.name} onChange={onEditChange} /></div>
    //         <div>Email: <input className='border-2 border-gray-100' type='text' name='email'
    //           value={edited.email} onChange={onEditChange} /></div>
    //         <div>Phone: <input className='border-2 border-gray-100' type='text' name='phone'
    //           value={edited.phone} onChange={onEditChange} /></div>
    //         <div>Website: <input className='border-2 border-gray-100' type='text'
    //           name='website' value={edited.website} onChange={onEditChange} /></div>

    //       </div>
    //       <div className="flex justify-end items-center w-100 border-t p-3">
    //         <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white 
    //         mr-1 close-modal" onClick={onCancel}>취소</button>
    //         <button type='submit' className="bg-blue-600 hover:bg-blue-700 px-3 py-1 
    //         rounded text-white">수정</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default EditModal;