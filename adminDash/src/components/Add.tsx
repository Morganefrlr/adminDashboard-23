import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';


type Props ={
   slug: string,
   columns:GridColDef[],
   setOpen:React.Dispatch<React.SetStateAction<boolean>>,
}

const Add = (props:Props) => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:()=>{
            return fetch(`http://localhost:8800/api/${props.slug}s`, {
                method:'post',
                headers:{
                    Accept: "application/json",
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                    id:111,
                    img:"",
                    lastName:'Hello',
                    firstName:'Test',
                    email:'test@gmail.com',
                    phone:"123 456 789",
                    createdAt:"01.02.2023",
                    verified: true,
                })

        })
        },
        onSuccess: () =>{
            queryClient.invalidateQueries([`all${props.slug}s`])
        }
    })

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault(),

       mutation.mutate()
       props.setOpen(false)
    }


    return (
        <div className='w-screen h-screen absolute top-0 left-0 bg-gray-900/60 flex items-center justify-center'>
            <div className='p-12 rounded-xl bg-gray-800 relative'>
                <span onClick={() =>props.setOpen(false)} className='absolute top-3 right-5 cursor-pointer'>X</span>
                <h1 className='mb-10 text-2xl text-gray-300'>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}  className='flex max-w-lg justify-between flex-wrap '>
                    {props.columns
                    .filter(item=>item.field !== 'id' && item.field !== 'img')
                    .map(column =>
                        <div className='flex flex-col gap-3 mb-5 w-2/5'>
                            <label className='text-sm '>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field}  className='p-2 bg-transparent text-gray-50 outline-none border border-gray-300 rounded'/>
                        </div>
                    )}
                    <button className='w-full p-3 cursor-pointer bg-gray-50 text-gray-900'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;