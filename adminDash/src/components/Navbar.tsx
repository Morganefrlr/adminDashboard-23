import React from 'react';


import { TfiBell, TfiLayoutGrid2, TfiSearch,TfiSettings} from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className='w-full p-5 flex items-center justify-between'>
            <div className='flex items-center font-bold gap-3'>
                <img src="/logo.png" alt="" className='w-8 h-8'/>
                <span>logoadmin</span>
            </div>
            <div className='flex items-center gap-5'>
                <TfiSearch className='max-sm:hidden'/> 
                <TfiLayoutGrid2 className='max-sm:hidden'/>
                <div className='flex items-center relative'>
                    <TfiBell/>   
                    <span className='bg-red-700 text-gray-50 rounded-full w-4 h-4 flex justify-center items-center text-xs absolute bottom-3 left-3'>1</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/placeholder.jpg" alt="" className='w-6 h-6 rounded-full'/>
                    <span>Jane</span>
                </div> 
                <TfiSettings className='max-sm:hidden' />
            </div>
        </div>
    );
};

export default Navbar;