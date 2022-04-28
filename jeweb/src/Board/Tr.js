import React from 'react';
import Td from './Td';

const Tr = ({ info, handleRemove, handleEdit }) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.id} handleRemove={handleRemove}
                            handleEdit={handleEdit} />
                    )
                })
            }
        </tbody>
    );
};

export default Tr;