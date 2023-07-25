import React from 'react';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
    color: string,
    icon:any,
    title: string,
    dataKey:string,
    number:number | string,
    percentage: number,
    chartData: object[]
}

const ChartBox = (props: Props) => {

    return (
        <div className='flex h-full'>
            <div className='flex flex-col justify-between w-3/5'>
                <div className='flex items-center gap-3 '>
                    <props.icon style={{color : props.color}}/>
                    <span>{props.title}</span>
                </div>
                <h1 className='text-4xl font-bold'>{props.number}</h1>
                <Link to='/' style={{color: props.color}} >
                    View all
                </Link>
            </div>
            <div className='w-2/5 flex flex-col justify-between'>
                <div className='h-full w-full '>
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                        <Tooltip 
                         contentStyle={{background:'transparent', border:'none'}}
                         labelStyle={{display: 'none'}}
                         position={{x:10, y:60}}
                        />
                        <Line type="monotone" dataKey={props.dataKey} dot={false} stroke={props.color} strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='flex flex-col text-right'>
                    <span className='font-bold text-xl' style={{color : props.percentage <0 ? 'tomato' : 'limegreen'}}>45%</span>
                    <span className='text-sm'>this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;