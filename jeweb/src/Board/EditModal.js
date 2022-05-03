import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { dateFormat } from '../utils';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

  const handleSave = (data) => {
    //데이터 수정하기

    axios.post('/api/updateBoard', {
      data
    })
      .then(alert("Update Sucess!"))
      .catch(err => console.log(err));

    return <Link to='/board' />
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
  }

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  }

  const predata = props.info;
  let rdate = dateFormat(predata.req_date);
  let rvdate = dateFormat(predata.review_date);

  console.log(props.info);

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
      <form onSubmit={onSubmitEdit}>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>취소</Button>
          <Button type='submit' className="btn btn-primary">수정</Button>
        </Modal.Footer>
      </form>
    </Modal >

  );
};

export default EditModal;