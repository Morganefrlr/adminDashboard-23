import React from 'react';
import { Link } from 'react-router-dom';
import {menu } from '../data'


const Menu = () => {
    return (
        <div className='h-full'>
            {menu.map(item => 
             <div key={item.id} className='flex flex-col gap-1 mb-5'>
                <span className='text-xs font-extralight text-gray-300 uppercase max-lg:hidden'>{item.title}</span>
                {item.listItems.map(listItem =>
                 <Link to={listItem.url} key={listItem.id} className='flex items-center gap-3 p-3 hover:bg-gray-700 rounded'>
                   <listItem.icon/>
                   <span className='text-sm max-lg:hidden'>{listItem.title}</span>
                 </Link>
                )}

             </div>
            )}
        </div>
    );
};

export default Menu;