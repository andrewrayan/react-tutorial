import React, { useState } from 'react';

const Product = (props) => {
    return (
        <div>
            <p onClick={() => props.removeFunction(props.indexPosition)}>Hi {props.product}</p>
        </div>
    );
}

export default Product;