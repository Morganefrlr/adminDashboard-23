import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from '../data';
import Add from '../components/Add';
import { useQuery } from 'react-query';
 

 const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || '/placeholder.jpg'} className='w-8 h-8 rounded-full object-cover' alt="" />
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];
  

const Users = () => {

  const [open, setOpen] = useState(false)

  const { isLoading, data } = useQuery('allusers', () =>
    fetch('http://localhost:8800/api/users').then(res =>
      res.json()
    )
  )
    return (
        <div>
            <div className='flex items-center gap-5 mb-5 '>
                <h1 className='text-3xl font-bold '>Users</h1>
                <button onClick={() =>setOpen(true)} className='p-1 cursor-pointer bg-gray-50 text-gray-900 text-xs'>Add New User</button>
            </div>
           {isLoading ? "Loading......." : <DataTable slug='users' columns={columns} rows={data}/>}
            {open && <Add setOpen={setOpen}  slug='user' columns={columns}/>}
        </div>
    );
};

export default Users;