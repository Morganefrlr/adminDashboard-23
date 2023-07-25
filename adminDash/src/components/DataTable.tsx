import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react';
import { Link } from 'react-router-dom';
import { TfiPencilAlt,TfiTrash } from "react-icons/tfi";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

type Props = {
    columns : GridColDef[],
    rows:object[],
    slug:string,
}


const DataTable = (props:Props) => {
    
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn:(id:number)=>{
            return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {method:'delete',
        })
        },
        onSuccess: () =>{
            queryClient.invalidateQueries([`all${props.slug}`])
        }
    })
    const handleDelete = (id:number) =>{
        mutation.mutate(id)
    }

    const actionColumn : GridColDef = {
        field : 'action',
        headerName:'Action',
        width: 200,
        renderCell:(params) =>{
            return(
                <div className='flex flex-col gap-2'>
                    <Link to={`/${props.slug}/${params.row.id}`}>
                    <TfiPencilAlt className='text-emerald-600 cursor-pointer text-lg'/>
                    </Link>
                    <div>
                        <TfiTrash onClick={() => handleDelete(params.row.id)} className='text-rose-600 cursor-pointer text-lg'/>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className=''>
            <DataGrid
                className='bg-gray-50 p-5 '
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
                    },
                },
                }}
                slots={{toolbar:GridToolbar}}
                slotProps={{
                    toolbar:{
                        showQuickFilter:true,
                        quickFilterProps:{debounceMs:500}
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector

            />
        </div>
    );
};

export default DataTable;