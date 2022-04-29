import React from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '-' + month + '-' + day;
}

const Td = ({ item, handleRemove, handleEdit }) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }
    const reqd = new Date(item.req_date)
    const revd = new Date(item.review_date)

    return (
        <>
            <tr className='"table'>
                <td className='w-auto'>{dateFormat(reqd)}</td>
                <td className='w-auto'>{item.req_name}</td>
                <td className='w-auto'>{item.brand_name}</td>
                <td className='w-auto'>{dateFormat(revd)}</td>
                <td className='w-auto'>{item.bank}</td>
                <td className='w-auto'>{item.cost}</td>
                <td className='w-auto'>{item.pay_yn}</td>
                <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                    <PencilSquare /></td>
                <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
                    <Trash /></td>
            </tr>
        </>
    )
};

export default Td;