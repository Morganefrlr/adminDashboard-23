import React from 'react';
import { topDealUsers } from '../data'

const TopBox = () => {
    return (
        <div className='flex flex-col h-full gap-8'>
            <h1 className='text-4xl font-bold'>Top Deals</h1>
            <div>
                {topDealUsers.map(user =>
                    <div key={user.id} className='flex items-center justify-between mb-8'>
                        <div className='flex gap-5 items-center'>
                            <img src={user.img} alt="" className='w-10 h-10 rounded-full object-cover'/>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium'>{user.username}</span>
                                <span className='text-xs'>{user.email}</span>
                            </div>
                        </div>
                        <span className='font-medium'>{user.amount}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopBox;