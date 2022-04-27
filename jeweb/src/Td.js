import React from 'react';

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.name}</td>
            <td className='px-4 py-3'>{item.email}</td>
            <td className='px-4 py-3'>{item.phone}</td>
            <td className='px-4 py-3'>{item.website}</td>     
            <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
            <i class="bi bi-pencil"></i></td>
            <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
            <i class="bi bi-trash"></i></td>
        </tr>
        </>
    )
};

export default Td;