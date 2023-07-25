import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


type Props = {
    id:number,
    img?:string,
    title:string,
    info:object,
    chart:{
        dataKeys:{name:string; color:string}[],
        data:object[],
    }
    activities:{time:string, text:string}[]
}

const Single = (props:Props) => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <div>
                    <div className='flex items-center gap-5'>
                       {props.img && <img src={props.img} alt="" className='w-24 h-24 rounded-3xl object-cover'/>}
                        <h1 className='text-2xl font-semibold'>{props.title}</h1>
                        <button className='p-1 cursor-pointer bg-gray-50 text-gray-900 text-xs'>Update</button>
                    </div>
                    <div className='text-lg '>
                        {Object.entries(props.info).map(item =>
                            <div className='my-7 mx-0' key={item[0]}>
                                <span className='font-bold mr-2 capitalize'>{item[0]}:</span>
                                <span> {item[1]}</span>
                            </div>
                        )}
                        
                        
                    </div>
                </div>
                <hr className='w-11/12 h-0 border-0.5 border-gray-700 my-7 mx-0'/>
                {props.chart && <div className='mt-12 w-4/5 h-96 '>
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart
                        width={500}
                        height={300}
                        data={props.chart.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {props.chart.dataKeys.map(dataKey => 
                            <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} />
                        )}
                        
                        </LineChart>
                    </ResponsiveContainer>
                </div>}
            </div>
            <div className='flex-1'>
                <h2 className='mb-5 text-2xl'>Latest Activities</h2>
                {props.activities && 
                    <ul>
                        {props.activities.map(activity =>
                            <li key={activity.text} className='list-none relative w-0.5 pt-12 bg-red-400 after:absolute after:w-3 after:h-3 after:rounded-full after:left-1/2 after:bottom-0 after:bg-red-400 after:-translate-x-1/2 '>
                                <div className='p-4 bg-red-400/5 w-96'>
                                    <p className='mb-1 '>{activity.text}</p>
                                    <time className='text-xs'>{activity.time}</time>
                                </div>
                            </li>
                        )}
                        
                    </ul>
                }
                
            </div>
        </div>
    );
};

export default Single;