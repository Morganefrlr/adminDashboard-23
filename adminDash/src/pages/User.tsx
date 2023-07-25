import React from 'react';
import Single from '../components/Single';
import { singleUser } from '../data';

const User = () => {
    return (
        <div>
            <Single {...singleUser}/>
        </div>
    );
};

export default User;