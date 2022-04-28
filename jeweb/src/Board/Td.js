import React from 'react';

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
    const reqd=new Date(item.req_date)
    const revd=new Date(item.review_date)
    
    return (
        <>
            <tr className='"bg-white border-2 border-gray-200'>
                <td key={item.idx} className='table'>{dateFormat(reqd)}</td>
                <td key={item.idx} className='px-4 py-3'>{item.req_name}</td>
                <td key={item.idx} className='px-4 py-3'>{item.brand_name}</td>
                <td key={item.idx} className='px-4 py-3'>{dateFormat(revd)}</td>
                <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                    <i class="bi bi-pencil"></i></td>
                <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
                    <i class="bi bi-trash"></i></td>
            </tr>
        </>
    )
};

export default Td;