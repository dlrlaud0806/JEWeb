import React from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

import EditModal from './EditModal';
import '../index.css'

import { dateFormat } from '../utils.js'


const Td = ({ item, handleRemove, handleEdit }) => {
    const [modalShow, setModalShow] = React.useState(false);

    // const onRemove = () => {
    //     handleRemove(item.id)
    // }

    // const onEdit = () => {
    //     handleEdit(item);
    // }
    const reqd = new Date(item.req_date)
    const revd = new Date(item.review_date)

    return (
        <>
            <tr className='"table'>
                <td className='w-auto text-center'>{dateFormat(reqd)}</td>
                <td className='w-auto text-center'>{item.req_name}</td>
                <td className='w-auto'>{item.brand_name}</td>
                <td className='w-auto text-center'>{dateFormat(revd)}</td>
                <td className='w-auto'>{item.bank}</td>
                <td className='w-auto text-center'>{item.cost}</td>
                <td className='w-auto text-center'>{item.pay_yn}</td>
                <td className='w-auto text-center edit-icon' onClick={() => setModalShow(true)}>
                    <PencilSquare />
                </td>
                <td className='text-center cursor-pointer edit-icon'>
                    <Trash /></td>
            </tr>
            <EditModal
                info={item}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
};

export default Td;