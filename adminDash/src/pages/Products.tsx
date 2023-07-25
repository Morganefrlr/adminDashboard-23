import React, { useState } from 'react';
import DataTable from '../components/DataTable';
import Add from '../components/Add';
import { GridColDef } from '@mui/x-data-grid';
//import { products } from '../data';
import { useQuery } from 'react-query';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || '/placeholder.jpg'} className='w-8 h-8 rounded-full object-cover' alt="" />
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];
  
const Products = () => {
    const [open, setOpen] = useState(false)

    const { isLoading, data } = useQuery('allproducts', () =>
    fetch('http://localhost:8800/api/products').then(res =>
      res.json()
    )
  )
    return (
        <div>
            <div className='flex items-center gap-5 mb-5 '>
                <h1 className='text-3xl font-bold '>Products</h1>
                <button onClick={() =>setOpen(true)} className='p-1 cursor-pointer bg-gray-50 text-gray-900 text-xs'>Add New Product</button>
            </div>
            {isLoading? "Loading ...... " : <DataTable slug='products' columns={columns} rows={data}/>}
            {open && <Add setOpen={setOpen}  slug='product' columns={columns}/>}
        </div>
    );
};

export default Products;