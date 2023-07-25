import React from 'react';
import Single from '../components/Single';
import { singleProduct } from '../data';

const Product = () => {
    return (
        <div>
            <Single {...singleProduct}/>
        </div>
    );
};

export default Product;
